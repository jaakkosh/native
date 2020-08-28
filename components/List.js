import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import ListItem from "./ListItem";
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';


const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setMediaArray(json)
    console.log("mediaArray", mediaArray)
  };

  useEffect(() => {
    loadMedia();
  }, []);



  return(
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <ListItem singleMedia = {item}/>}
    />
  );
};

export default List;
