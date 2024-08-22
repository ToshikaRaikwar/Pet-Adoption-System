import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../app/UserPool';

const { width } = Dimensions.get('window');

const UserAuthentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsFormComplete(false); 
  };

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    const signUpParams = {
      Username: username,
      Password: password,
      Attributes: [
        { Name: 'email', Value: email },
        { Name: 'phone_number', Value: phoneNumber },
      ],
    };

    UserPool.signUp(signUpParams.Username, signUpParams.Password, signUpParams.Attributes, null, (err, data) => {
      if (err) {
        console.log('Error signing up:', err.message);
      } else {
        console.log('Sign up successful:', data);
        setOtp('');
        setIsFormComplete(true); 
        alert('Please enter the OTP sent to your phone or email:');
      }
    });
  };

  const handleOtpVerification = async () => {
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    user.confirmRegistration(otp, true, (err, data) => {
      if (err) {
        console.log('Error verifying OTP:', err.message);
        alert('Invalid OTP. Please try again.');
      } else {
        console.log('OTP verified successfully:', data);
        alert('Account created successfully! You can now log in.');
      }
    });
  };

  const handleLogin = async () => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login successful:', result);
      },
      onFailure: (err) => {
        console.log('Error logging in:', err.message);
      },
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/banner2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>{isLogin ? 'Login' : 'Signup'}</Text>

          {!isLogin && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              {!isFormComplete && (
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
              )}
            </>
          )}

          {isFormComplete && !isLogin && (
            <>
              <TextInput
                style={styles.input}
                placeholder="OTP"
                value={otp}
                onChangeText={setOtp}
              />
              <TouchableOpacity style={styles.button} onPress={handleOtpVerification}>
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableOpacity>
            </>
          )}

          {isLogin && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </>
          )}

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
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  box: {
    width: width * 0.8,
    maxWidth: 400,
    padding: 20,
    top: -50,
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

export default UserAuthentication;
