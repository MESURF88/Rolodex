import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import * as expoSQLite from 'expo-sqlite';
// USE FIREBASE wont be able to prototype on iOS
import { API_KEY, APP_ID, MESSAGE_SENDER_ID } from 'react-native-dotenv'
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

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile', {name: 'Kevin'} )}>
          <Text>Go to Kevin's profile</Text>
         </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
         <Text style={styles.title}>This is {navigation.getParam('name', 'default value')}'s profile</Text>
         <Items />
         <StatusBar style="auto" />
      </View>
    );
  }
}

const Layouts = createStackNavigator({
    Home:HomeScreen,
    Profile:ProfileScreen,
  },
  {
      initialRouteName: 'Home'
});
const AppContainer = createAppContainer(Layouts);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5AD44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  title: {
    maxHeight: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    maxHeight: 30,
    backgroundColor: '#1c9963',
    alignItems: 'center',
    justifyContent: 'center',
  },
});