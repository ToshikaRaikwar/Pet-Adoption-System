import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
//import awsconfig from '@/src/aws-exports';

//Amplify.configure(awsconfig);

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
