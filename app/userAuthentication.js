import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Amplify from 'aws-amplify';
// import awsconfig from '@/src/aws-exports';

// Amplify.configure(awsconfig);

const { width, height } = Dimensions.get('window');

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <ImageBackground
      source={require('../assets/images/banner2.png')} // Update this path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Signup'}</Text>
          
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Username"
            />
          )}
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Signup'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%', // Adds padding to ensure content doesn’t touch the edges
  },
  box: {
    width: width * 0.8, // Responsive width: 90% of the screen width
    maxWidth: 400, // Maximum width for larger screens
    padding: 20,
    top:-50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8e2020',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    color: '#8e2020',
  },
  button: {
    height: 50,
    backgroundColor: '#8e2020',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleText: {
    textAlign: 'center',
    color: '#8e2020',
    marginTop: 10,
  },
});

export default App;
