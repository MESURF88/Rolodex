import { useEffect } from 'react';
import React from 'react';
import { Platform, Text } from 'react-native';
import * as expoSQLite from 'expo-sqlite';
// USE FIREBASE wont be able to prototype on iOS
import { API_KEY, APP_ID, MESSAGE_SENDER_ID } from '@env';
import firebase from 'firebase/app'
import "firebase/database";

import {
    BackgroundView,
    TitleText,
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

            try {

                db.transaction(trans=>{

                trans.executeSql(

                    'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'

                )

                trans.executeSql(

                    'INSERT INTO items (text, count) values (?, ?)',["qadir",20],

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

    // TODO: combine these into one function
    // Get items of firebase db
    GetAllIndexWeb() {
        const [items, setItems] = React.useState(null);
        dbref.get().then((snapshot) => {
            if (snapshot.exists()) {
                setItems(snapshot.val());
                console.log("Kevin's age here: ", snapshot.val().Kevin, " Available items: ", items);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

        if (items === null || items.length === 0) {
            return null;
        }
        else{
            return items;
        }
    }

    // Get items of sqlite db
    GetAllIndex() {
        const [items, setItems] = React.useState(null);

        useEffect(() => {
            db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM items ORDER BY ROWID ASC LIMIT 1;`,
                [],
                (_, { rows: { _array } }) => setItems(_array)
            );
            });
        }, []);



        if (items === null || items.length === 0) {
            return null;
        }
        else{
            return (
                <BackgroundView>
                {items.map(({ id, count, text }) => (
                    <TitleText
                    key={id}
                    >
                    <TitleText>Text: {text}</TitleText>
                    <TitleText>Count: {count}</TitleText>
                    </TitleText>
                ))}
                </BackgroundView>
            );
        }
    }
}

const DBHandleInstance = new DBHandle();

export default DBHandleInstance