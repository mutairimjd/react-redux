import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { f, auth, database } from './config/config.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
