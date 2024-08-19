import React from 'react';
import { Provider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import UserAuthentication from '../app/screens/UserAuthentication';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6200ee',
      accent: '#03dac4',
    },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <UserAuthentication />
    </Provider>
  );
}
