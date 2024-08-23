import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import UserAuthentication from './screens/UserAuthentication';

const Stack = createNativeStackNavigator();

const MyNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false, // Hide the header for all screens
    }}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="UserAuthentication" component={UserAuthentication} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <MyNavigator />
    </NavigationContainer>
  );
}

export default App;
