import React from 'react';
import { Platform, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Schema from './schema'
import * as expoSQLite from 'expo-sqlite';
// @ts-ignore 
import { API_KEY, APP_ID, MESSAGE_SENDER_ID, ISSUER, CLIENT_ID, CLIENT_SECRET, SCOPE } from '@env';
import firebase from 'firebase/app'
import "firebase/database";

// NOTE: USE FIREBASE for WEB

import {
    TitleText,
    RowElement,
} from './styles'

// Initialize Firebase local only
const firebaseConfig = {
        apiKey: {API_KEY},
        authDomain: "rolodex-hillkevin.firebaseapp.com",
        projectId: "rolodex-hillkevin",
        storageBucket: "rolodex-hillkevin.appspot.com",
        messagingSenderId: {MESSAGE_SENDER_ID},
        appId: {APP_ID}
};

// Declare general db local only
var db;

// Declare web db local only
var dbref;

// Web db generate array of key values
const firebaseSnapshotToArray = function(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        if (childSnapshot.val() !== null) {
            returnArr.push(childSnapshot.val());
        }
    });

    return returnArr;
};

const url = "http://localhost:8080/linearData";
const sendAPIRequest = async () => {
    try {
      const auth = await axios({
        url: `${ISSUER}/v1/token`,
        method: 'post',
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET
        },
        params: {
          grant_type: 'client_credentials',
          scope: SCOPE
        }
      })
  
      const response = await axios({
        url,
        method: 'get',
        data: null,
        headers: {
          authorization: `${auth.data.token_type} ${auth.data.access_token}`
        }
      })
  
      console.log(response.data);

    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

// Build the Table view Element
const tableBuild = function(recvR) {
    var returnArr = [];

    let keyIdx = 0;
    for (var i = 0; i < recvR.length; i++) {
        returnArr.push(
        <View key={keyIdx} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <View key={keyIdx+1} style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#F1ED70",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{recvR[i].first_name}</Text></View>
            <View key={keyIdx+2} style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#F1ED70",
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{recvR[i].age}</Text></View>
        </View>
        )
        keyIdx = i + 3;
    }
 
    return returnArr;
};


// sqlite db generate array of key values
const sqliteRowsToArray = function(recvR) {
    var returnArr = [];

    returnArr = recvR;
 
    return returnArr;
};

class GetAllUsersTable extends React.Component {
    state = {
        recvRawRows: [],
        rowsFormatted: [],
        rowNumber: 0,
        readError: null,
        writeError: null
    }

    componentDidMount = async () => {
      var returnArr = [];
      if (Platform.OS === "web") {
        try {
            dbref.get().then((snapshot) => {
            // On success parse data
            if (snapshot.exists()) {
            
                returnArr = firebaseSnapshotToArray(snapshot);

                if (returnArr !== null && returnArr.length !== 0) {
                    this.setState({ rowNumber: returnArr.length});
                }

                this.setState({ rowsFormatted: tableBuild(returnArr) });

            }
            });
        } catch (error) {
            this.setState({ readError: error.message });
        }
      }
      else {
        try {

            db.transaction(trans=>{

                trans.executeSql(

                    'SELECT * FROM items ORDER BY ROWID ASC',
                    [],
                    (_, { rows: { _array } })  => this.setState({ recvRawRows: _array }),

                )

                },

                ()=>{

                console.log("Error while opening Database ");

                },

                ()=>{

                console.log("Database successfully retrieved");
                // On success parse data
                if (this.state.recvRawRows !== null && this.state.recvRawRows.length !== 0) {
                    returnArr = sqliteRowsToArray(this.state.recvRawRows);
                    this.setState({ rowNumber: this.state.recvRawRows.length});
                }

                this.setState({ rowsFormatted: tableBuild(returnArr) });

                }

            );

        } catch (error) {
            this.setState({ readError: error.message });
        }
      }

    }

    getRows= () => {
        return this.state.rowsFormatted;
    }

    getRowNumber= () => {
        return this.state.rowNumber;
    }

    id = 0;
    render() {
        var {
            width,
            height
          } = Dimensions.get('window');
        var contactstring = (this.getRowNumber() === 1) ? "Contact" : "Contacts";

        return (
        <RowElement key={this.id} style={{maxHeight: height - (height*.65) }}>
            <View style={{ minWidth: width-20, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center',  flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 5  }}>
                        <TitleText >You Have {this.getRowNumber()} {contactstring} </TitleText>
                    </View>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 5 }}> 
                        <Text style={{ fontWeight: 'bold' }}>Name</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 5}}>
                        <Text style={{ fontWeight: 'bold' }}>Age</Text>
                    </View>
                </View>
                {this.getRows()}
            </View>
        </RowElement>
        );
    }

}


class DBHandle {

    // Initialize database on new instance, NOTE: Only one instance of this class shall be created in the current .tsx file    
    #openDatabase() {
        if (Platform.OS === "web") {
            console.log("web");
                return {
                transaction: () => {
                    return {
                    executeSql: () => {},
                    };
                },
            };
        }
        else{
            const db = expoSQLite.openDatabase("db.db");
            return db;
        }
    }

    constructor() {
        // Open database method (private) and web uses firebase RTDB, app uses sqlite
        db = this.#openDatabase();
    }

    InitAllDB() {
        console.log("Initializing database...");
        if (Platform.OS === "web") {

            firebase.initializeApp(firebaseConfig);
            const fdb = firebase.database();
            dbref = fdb.ref('users');

        }
        else {

            // Filling in sample data for offline sqlite database
            try {
                // TODO: move this GET request api that can be accessed only from this app (api will call firebase and return array of values adn 2 length values rownum and columnum to update sqlite)
                var argString = "";
                var arrValues = []; 
                sendAPIRequest().then(apiData => {
                    for (let i = 0; i < apiData.rowNum; i++) {
                        argString += "(";
                        for (let j = 0; j < apiData.columnNum; j++) {
                            argString += ((j < (apiData.columnNum-1))? "?," : "?");
                        }
                        argString += ((i < (apiData.rowNum-1))? ")," : ")");
                    }
                    arrValues = apiData.linearDat;
                });

               /*
                let testObj =  [ {
                      "first_name" : "Kevin",
                      "age" : "26"
                    }, {
                      "first_name" : "Joe",
                      "age" : "58"
                    } ]
                  
                let keys = Object.keys(testObj[0]);
                let argString = "";
                let arrValues = [];
                let tempArr = [];
                let tempLength = 0;

                let len = testObj.length;
                
                for (let i = 0; i < len; i++) {
                    argString += "(";
                    tempArr = Object.values(testObj[i]);
                    tempLength = tempArr.length;
                    for (let j = 0; j < tempLength; j++) {
                        argString += ((j < (tempLength-1))? "?," : "?");
                        arrValues.push(tempArr[j]);
                    }
                    argString += ((i < (len-1))? ")," : ")");
                }
 */

                db.transaction(trans=>{

                trans.executeSql(

                    'DROP TABLE IF EXISTS items'
                    
                )

                trans.executeSql(

                    'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, age TEXT)'
                    
                )

                trans.executeSql(

                    'INSERT INTO items (first_name, age) values '+ String(argString), arrValues,
                    (trans, results) => {               
                        if (results.rowsAffected > 0 ) {
                            console.log('Insert success');              
                        } else {
                            console.log('Insert failed');
                        }
                    }

                )

                },

                ()=>{

                console.log("Error while opening Database ");

                },

                ()=>{

                console.log("Database successfully created");

                }

                );

            } catch (error) {

                console.log("Error! ",error);

            }
        }
    }


    // Get items of firebase db or sqlite db
    GetAllUserRows() {
        return GetAllUsersTable;
    }
}

const DBHandleInstance = new DBHandle();

export default DBHandleInstance