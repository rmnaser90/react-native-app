import { StatusBar } from 'expo-status-bar';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

 const MainComponent = inject("mainStore")(observer(function ({mainStore}) {
    return (
        <View  style={styles.container}>

      <ScrollView>
          {mainStore.books.map((b,i) => <View key={i} style={styles.bookContainer}>
          <Text>{b.volumeInfo.title}</Text>
          </View> )}
        <StatusBar style="auto" />
      </ScrollView>
        </View>
    );
  })) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookContainer:{
      width:"70%",
      margin:"10%"
  }
});

export default MainComponent
