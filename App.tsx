import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import DBHandleInstance from './src/persistence/DBHandler'
import HomeScreen from "./src/pages/Home";
import ProfileScreen from "./src/pages/Profile";

// Initialize page navigation
const StackNavigator = createStackNavigator();

// Initialize DB once
var InitDBFunc = DBHandleInstance.InitAllDB;
InitDBFunc();

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