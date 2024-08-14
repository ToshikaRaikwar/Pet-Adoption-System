// import React from 'react';
// import '@expo/metro-runtime';
// import { StyleSheet, Text, View } from 'react-native';
// import Amplify from 'aws-amplify';
// import awsconfig from '../src/aws-exports';
// // Ensure this module is installed
// import { App } from 'expo-router/build/qualified-entry';
// import { renderRootComponent } from 'expo-router/build/renderRootComponent';


// Amplify.configure(awsconfig);

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the App!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
console.log('Amplify:', Amplify);
import awsconfig from '../src/aws-exports';
console.log('AWS Config:', awsconfig);

if (Amplify && awsconfig) {
  Amplify.configure(awsconfig);
} else {
  console.error('Amplify or AWS Config is missing.');
}

const App = () => (
  <View style={styles.container}>
    <Text>Welcome to the Amplify Test App!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
