import { useEffect } from 'react';
import React from 'react';
import { Platform, View, Text } from 'react-native';
import * as expoSQLite from 'expo-sqlite';
// USE FIREBASE wont be able to prototype on iOS
import { API_KEY, APP_ID, MESSAGE_SENDER_ID } from '@env';
import firebase from 'firebase/app'
import "firebase/database";

import {
    BackgroundView,
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

// sqlite db generate array of key values
const sqliteRowsToArray = function(recvR) {
    var returnArr = [];

    returnArr = recvR.reduce(function(map, obj) {
        map[obj.key] = obj.val;
        return map;
    }, {});
    console.log("sqlite",returnArr);

    return returnArr;
};

class GetAllUsersTable extends React.Component {
    state = {
        rowsFormatted: [],
        name: "empty...",
        age: "empty...",
        readError: null,
        writeError: null
    }

    componentDidMount = async () => {
      var returnArr = [];
      if (Platform.OS === "web") {
        try {
            dbref.get().then((snapshot) => {
            if (snapshot.exists()) {
            
            returnArr = firebaseSnapshotToArray(snapshot);
            
            let localRows = [];
            let keyIdx = 0;
            for (var i = 0; i < returnArr.length; i++) {
                localRows.push(
                <View key={keyIdx} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View key={keyIdx+1} style={{ flex: 1, alignSelf: 'stretch' }}><Text>{returnArr[i].name}</Text></View>
                    <View key={keyIdx+2} style={{ flex: 1, alignSelf: 'stretch' }}><Text>{returnArr[i].age}</Text></View>
                </View>
                )
                keyIdx = i + 3;
            }
            this.setState({ rowsFormatted: localRows });

            }
            });
        } catch (error) {
            this.setState({ readError: error.message });
        }
      }
      else {
        try {
            console.log("try app");

            const [recvRows, setRecvRows] = React.useState(null);

            useEffect(() => {
                db.transaction((tx) => {
                tx.executeSql(
                    `SELECT * FROM items ORDER BY ROWID ASC LIMIT 1;`,
                    [],
                    (_, { rows: { _array } }) => setRecvRows(_array)
                );
                });
            }, []);

            console.log(recvRows);
            if (recvRows !== null && recvRows.length !== 0) {
                returnArr = sqliteRowsToArray(recvRows);
            }

        } catch (error) {
            this.setState({ readError: error.message });
        }
      }

    }

    getRows= () => {
        return this.state.rowsFormatted;
    }

    id = 1;
    render() {
        return (
        <RowElement key={this.id}>
            <View style={{ minWidth: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch' }}> 
                        <Text style={{ fontWeight: 'bold' }}>Name</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
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
        // Open database method (private) and web uses firbase RTDB, apps uses sqlite
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

                db.transaction(trans=>{

                trans.executeSql(

                    'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age TEXT)'
                    
                )

                trans.executeSql(

                    'INSERT INTO items (name, age) values (?, ?)', ["KevDog", "26"],

                ()=>{console.log("Data Inserted");},

                ()=>{console.log("Data Not Inserted");}

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



    // TODO: combine these into one function name GetAllUserRows
    // Get items of firebase db
    GetAllIndexWeb() {
        return GetAllUsersTable;
    }


    // Get items of sqlite db
    // GetAllIndex() {
    //     const [items, setItems] = React.useState(null);

    //     useEffect(() => {
    //         db.transaction((tx) => {
    //         tx.executeSql(
    //             `SELECT * FROM items ORDER BY ROWID ASC LIMIT 1;`,
    //             [],
    //             (_, { rows: { _array } }) => setItems(_array)
    //         );
    //         });
    //     }, []);



    //     if (items === null || items.length === 0) {
    //         return null;
    //     }
    //     else{
    //         return (
    //             <BackgroundView>
    //             {items.map(({ id, count, text }) => (
    //                 <RowElement
    //                 key={id}
    //                 >
    //                 <RowElement>Text: {text}</RowElement>
    //                 <RowElement>Count: {count}</RowElement>
    //                 </RowElement>
    //             ))}
    //             </BackgroundView>
    //         );
    //     }
    // }
}

const DBHandleInstance = new DBHandle();

export default DBHandleInstance