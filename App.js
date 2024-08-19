import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserAuthentication from './app/screens/UserAuthentication';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserAuthentication"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="UserAuthentication" component={UserAuthentication} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
