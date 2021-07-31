import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/pages/Home";
import ProfileScreen from "./src/pages/Profile";
import * as expoSQLite from 'expo-sqlite';
// USE FIREBASE wont be able to prototype on iOS
import { API_KEY, APP_ID, MESSAGE_SENDER_ID } from '@env';
import firebase from 'firebase/app'
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: {API_KEY},
    authDomain: "rolodex-hillkevin.firebaseapp.com",
    projectId: "rolodex-hillkevin",
    storageBucket: "rolodex-hillkevin.appspot.com",
    messagingSenderId: {MESSAGE_SENDER_ID},
    appId: {APP_ID}
};

firebase.initializeApp(firebaseConfig);


function openDatabase() {
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

const db = openDatabase();

if (Platform.OS === "web") {
  const fdb = firebase.database();
  const ref = fdb.ref('users');

  var value = ref.get().then((snapshot) => {
    if (snapshot.exists()) {
      
      console.log("Kevin's age here: ", snapshot.val().Kevin);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}
else{

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

function Items() {
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

  return (
    <View style={styles.title}>
      {items.map(({ id, count, text }) => (
        <TouchableOpacity
          key={id}
          style={styles.results}
        >
          <Text>Text: {text}</Text>
          <Text>Count: {count}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const StackNavigator = createStackNavigator();

const AllScreenNavigation = () => (
  <StackNavigator.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: () => null
    }}
  >
    <StackNavigator.Screen component={HomeScreen} name="Home" />
    <StackNavigator.Screen component={ProfileScreen} name="Profile" />
  </StackNavigator.Navigator>
);

export default class App extends React.Component {
  render() {
    return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AllScreenNavigation />
    </NavigationContainer> 
    );
  }
}