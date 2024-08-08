import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello World</Text>
      <Text>This is the firstkmlmlm page of dsfsdfsdefyour app.</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
