import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import ListItem from "./ListItem";
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';


const url = 'http://media.mw.metropolia.fi/wbma/';
const List = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(url + 'media?limit=' + limit);
      const json = await response.json();
      const media =await Promise.all(json.map(async (item) => {
        const response = await fetch(url + 'media/' + item.file_id);
        const  json = await response.json();
        return json;
        }));

      console.log(json);
      setMediaArray(media)
    }
    catch (error) {
      console.error('loadMedia',error)
    }
    console.log("mediaArray", mediaArray)
  };

  useEffect(() => {
    loadMedia(5);
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
