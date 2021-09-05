import React from 'react';
import { Platform } from 'react-native';
import base64 from 'react-native-base64'
import Schema from './schema'
import * as expoSQLite from 'expo-sqlite';
// @ts-ignore 
import { API_KEY, APP_ID, MESSAGE_SENDER_ID, ISSUER, CLIENT_ID, CLIENT_SECRET, SCOPE, API_ENDPOINT } from '@env';
import firebase from 'firebase/app'
import "firebase/database";

// NOTE: USE FIREBASE for WEB

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

var tableClass;

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

const url_post = `${ISSUER}/v1/token`;

var resolvedToken = "2222";
var dataBody = new URLSearchParams();
dataBody.append('grant_type', 'client_credentials');
dataBody.append('scope', SCOPE);
dataBody.append('access_token', resolvedToken);
const basicb = base64.encode(CLIENT_ID+":"+CLIENT_SECRET);

const getFirebaseFromApi = (authToken) => {  return fetch(`${API_ENDPOINT}/linearData/`, { headers: { 'Authorization': `${authToken.token_type} ${authToken.access_token}`}} )    .then((response) => response.json())    .then((json) => {      return json;    })    .catch((error) => {      console.error(error);    });};

// sqlite db generate array of key values
const sqliteRowsToArray = function(recvR) {
    var returnArr = [];

    returnArr = recvR;
 
    return returnArr;
};

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
        tableClass = {
            recvRawRows: [],
            rowsData: [],
            rowNumber: 0,
            readError: null,
            writeError: null
        }
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

                fetch(
                    url_post, {
                    method: "POST",
                    headers: {
                        'Authorization': 'Basic '+ basicb, 
                        'Accept': 'application/json',
                        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    // @ts-ignore 
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: 'X-CSRF-Token',
                    body: dataBody.toString()
                    }
                )
                .then(resp => resp.json())
                .then(auth => {
                    const authToken = auth;
                    getFirebaseFromApi(authToken).then(apiData => {
                        var arrValues = []; 
                        var argString = "";
                        for (let i = 0; i < apiData.rowNum; i++) {
                            argString += "(";
                            for (let j = 0; j < apiData.columnNum; j++) {
                                argString += ((j < (apiData.columnNum-1))? "?," : "?");
                            }
                            argString += ((i < (apiData.rowNum-1))? ")," : ")");
                        }
                        arrValues = apiData.linearDat;

                        try {

                            db.transaction(trans=>{

                                trans.executeSql(
                
                                    'DROP TABLE IF EXISTS users'
                                    
                                )
                
                                trans.executeSql(
                
                                    'CREATE TABLE IF NOT EXISTS users (person_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, communication_pref TEXT, latitude INTEGER, longitude INTEGER, age TEXT, first_known TEXT, interest_category TEXT, interest TEXT, been_awhile BOOLEAN, notes TEXT)'
                                    
                                )
                
                                trans.executeSql(
                
                                    'INSERT INTO users (first_name, last_name, communication_pref, latitude, longitude, age, first_known, interest_category, interest, been_awhile, notes) values '+ String(argString), arrValues,
                                    (trans, results) => {               
                                        if (results.rowsAffected > 0 ) {
                                            console.log('Insert success');              
                                        } else {
                                            console.log('Insert failed');
                                        }
                                    }
                
                                )
                
                                },
                
                                (err)=>{
                
                                console.log("Error while opening Database ",err);
                
                                },
                
                                ()=>{
                
                                console.log("Database successfully created");
                
                                }
                
                                );
                                            
                            } catch (error) {

                                console.log("Error! ",error);

                            }

                    })
                    .catch(error => console.log("GET Error: ",error));
                })
                .catch(error => console.log("POST Error: ", error))

            } catch (error) {

                console.log("Error! ",error);

            }
        }
    }
    
    // Get items of firebase db or sqlite db
    AllUserRowsDB() {
        return new Promise((resolve,reject) => {
            var returnArr = [];
            if (Platform.OS === "web") {

            try {
                dbref.get().then((snapshot) => {
                // On success parse data
                if (snapshot.exists()) {
                
                    returnArr = firebaseSnapshotToArray(snapshot);
    
                    if (returnArr !== null && returnArr.length !== 0) {
                        tableClass.rowNumber = returnArr.length;
                    }

                    resolve(returnArr);
    
                }
                })
                .catch((err) => {
                    console.log(err);
                    reject(0);
                });
            } catch (error) {
                tableClass.readError = error.message;
                reject(0);
            }
            }
            else {
            try {
    
                db.transaction(trans=>{
    
                    trans.executeSql(
    
                        'SELECT * FROM users ORDER BY ROWID ASC',
                        [],
                        (_, { rows: { _array } })  => tableClass.recvRawRows = _array,
    
                    )
    
                    },
    
                    (err)=>{
    
                    console.log("Error while opening Database ", err);
                    reject(0);
    
                    },
    
                    ()=>{
    
                    console.log("Database successfully retrieved");
                    // On success parse data
                    if (tableClass.recvRawRows !== null && tableClass.recvRawRows.length !== 0) {
                        returnArr = sqliteRowsToArray(tableClass.recvRawRows);
                        tableClass.rowNumber = tableClass.recvRawRows.length;
                    }
    
                    resolve(returnArr);
    
                    }
    
                );
    
            } catch (error) {
                tableClass.readError = error.message;
                reject(0);
            }
            }
    
        });
    }

    // get on users data based on person_id
    OneUserRowDB(personID) {
        return new Promise((resolve,reject) => {
            var returnArr = [];
            if (Platform.OS === "web") {

            try {debugger;
                dbref.orderByChild('person_id').equalTo(1).then((snapshot) => {
                // On success parse data
                if (snapshot.exists()) {
                    debugger;
                    returnArr = firebaseSnapshotToArray(snapshot);
    
                    if (returnArr !== null && returnArr.length !== 0) {
                        tableClass.rowNumber = returnArr.length;
                    }

                    resolve(returnArr);
    
                }
                })
                .catch((err) => {
                    console.log(err);
                    reject(0);
                });
            } catch (error) {
                tableClass.readError = error.message;
                reject(0);
            }
            }
            else {
            try {
                db.transaction(trans=>{
    
                    trans.executeSql(
    
                        'SELECT * FROM users WHERE person_id=?',
                        [personID],
                        (_, { rows: { _array } })  => tableClass.recvRawRows = _array,
    
                    )
    
                    },
    
                    (err)=>{
    
                    console.log("Error while reading id ", err);
                    reject(0);
    
                    },
    
                    ()=>{
    
                    console.log("Database successfully retrieved");
                    // On success parse data
                    if (tableClass.recvRawRows !== null && tableClass.recvRawRows.length !== 0) {
                        returnArr = sqliteRowsToArray(tableClass.recvRawRows);
                        tableClass.rowNumber = tableClass.recvRawRows.length;
                    }
    
                    resolve(returnArr);
    
                    }
    
                );
    
            } catch (error) {
                tableClass.readError = error.message;
                reject(0);
            }
            }
    
        });
    }
}

const DBHandleInstance = new DBHandle();

export default DBHandleInstance