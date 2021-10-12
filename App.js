import React, { useEffect } from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/components/Navigation';
import { AddUser } from './src/components/utils/Api';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
