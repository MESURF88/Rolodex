import React from 'react';
import { useEffect, useState } from 'react';
import { Platform, View, Text, Dimensions } from 'react-native';
import firebase from 'firebase/app'
import "firebase/database";
import DBHandleInstance from '../DBHandler'

// NOTE: USE FIREBASE for WEB
var dbref = DBHandleInstance.GetFireDB();
var db = DBHandleInstance.GetsqliteDB();

import {
    TitleText,
    RowElement,
    DataScroll,
} from './styles'

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
            borderWidth: 5, }}><Text style={{ color: 'black' }}>{recvR[i].been_awhile}</Text></View>
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

const DBScreen = ({navigation, route}) => {

    const [recvRawRows, rowsFormatted] = useState([]);
    const [rowNumber] = useState(0);
    const [readError, writeError] = useState(null);

    useEffect(() => {

        var returnArr = [];
        if (Platform.OS === "web") {
          try {
              dbref.get().then((snapshot) => {
              // On success parse data
              if (snapshot.exists()) {
              
                  returnArr = firebaseSnapshotToArray(snapshot);
  
                  if (returnArr !== null && returnArr.length !== 0) {
                      setRowNumber( returnArr.length );
                  }
  
                  setRowsFormatted( tableBuild(returnArr) );
  
              }
              })
              .catch((err) => {
                  console.log(err);
              });
          } catch (error) {
              setReadError( error.message );
          }
        }
        else {
          try {
  
              db.transaction(trans=>{
  
                  trans.executeSql(
  
                      'SELECT * FROM users ORDER BY ROWID ASC',
                      [],
                      (_, { rows: { _array } })  => setRecvRawRows( _array ),
  
                  )
  
                  },
  
                  ()=>{
  
                  console.log("Error while opening Database ");
  
                  },
  
                  ()=>{
  
                  console.log("Database successfully retrieved");
                  // On success parse data
                  if (recvRawRows !== null && recvRawRows.length !== 0) {
                      returnArr = sqliteRowsToArray(recvRawRows);
                      setRowNumber( recvRawRows.length );
                  }
  
                  setRowsFormatted( tableBuild(returnArr) );
  
                  }
  
              );
  
          } catch (error) {
            setReadError( error.message );
          }
        }
  
    }, []);

    const { name } = route.params;
    const id = 0;
    var {
        width,
        height
      } = Dimensions.get('window');
    var contactstring = (rowNumber === 1) ? "Contact" : "Contacts";
    return (
        <RowElement key={id} style={{maxHeight: height - (height*.25) }}>
            <View style={{ minWidth: width-20, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center',  flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderWidth: 4  }}>
                        <TitleText >You Have {rowNumber} {contactstring} </TitleText>
                    </View>
                </View>
                
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}> 
                        <Text style={{ fontWeight: 'bold' }}>Name</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}>
                        <Text style={{ fontWeight: 'bold' }}>Been Awhile</Text>
                    </View>
                </View>
                <DataScroll>
                    {rowsFormatted}
                </DataScroll>
            </View>
        </RowElement>
    );
}

export default DBScreen