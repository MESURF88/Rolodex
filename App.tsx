import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import DBHandleInstance from './src/persistence/DBHandler'
import AppProvider from './src/hooks';
import Routes from './src/routes';

// Initialize DB once
var InitDBFunc = DBHandleInstance.InitAllDB;
InitDBFunc();



export default class App extends React.Component {
  render() {
    return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer> 
    );
  }
}