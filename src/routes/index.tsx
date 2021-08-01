import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/Home'
import ProfileScreen from '../pages/Profile'

import { ThemeContext } from 'styled-components'

// Initialize page navigation
const StackNavigator = createStackNavigator();

export default function Routes() {
  const { colors } = useContext(ThemeContext)
  return (
      <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: colors.tabBarActiveBackgroundColor, },
        header: () => null
      }}
    >
      <StackNavigator.Screen
            options={{
                title: 'Home',
              }}
      component={HomeScreen} name="Home" />
      <StackNavigator.Screen 
            options={{
                title: 'Profile',
              }}
              
      component={ProfileScreen} name="Profile" />
    </StackNavigator.Navigator>
  )
}