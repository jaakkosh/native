import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import List from "./components/List";



const App = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <List/>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {

    paddingTop: 25,
    flex: 1,
    backgroundColor: '#050',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
