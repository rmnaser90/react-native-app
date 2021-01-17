import { StatusBar } from 'expo-status-bar';
import { Provider } from 'mobx-react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './src/MainComponent';
import MainStore from './src/store/MainStore'

const mainStore = new MainStore()
const store = {mainStore}


export default function App() {

  return (
    <Provider {...store}>
      <View style={styles.container}>
      <MainComponent/>
      </View>
    </Provider>
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
