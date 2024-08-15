// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './Page'; // Import your main page component
import UserAuthentication from '../src/screens/UserAuthentication'; // Import the authentication screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Page} />
        <Stack.Screen name="UserAuthentication" component={UserAuthentication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
