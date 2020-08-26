import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={{backgroundColor: "f00"}}>
      <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
        <Image
          style={{width: 110, height: 110}}
          source={{uri: props.singleMedia.thumbnails.w160}}
        />
        <View>

          <Text style={{width: 50, height: 50}}>{props.singleMedia.title}</Text>
          <Text>{props.singleMedia.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
  },
});


/*ListItem.propTypes={
  singleMedia: PropTypes.object,
};*/
export default ListItem;
