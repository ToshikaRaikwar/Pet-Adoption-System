import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number: phoneNumber,
        },
      });
      console.log('User signed up:', user);
    } catch (error) {
      console.log('Error signing up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default SignUp;
