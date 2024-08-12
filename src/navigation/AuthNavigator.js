import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import UserAuthentication from '../screens/UserAuthentication';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
  <Stack.Screen 
    name="Home" 
    component={Home} 
    options={{ headerShown: false }} 
  />
  {/* <Stack.Screen 
    name="UserAuthentication" 
    component={UserAuthentication} 
    options={{ headerShown: true, title: "Login or Signup" }} 
  /> */}
</Stack.Navigator>

  );
}
