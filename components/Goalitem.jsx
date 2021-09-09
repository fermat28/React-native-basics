import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList } from 'react-native';



const GoalItem = props=> {

 return  ( <View style={styles.goalmap}>
    <Text> {props.title} </Text>
  </View> );

};

const styles = StyleSheet.create({
    goalmap: {
      margin: 10,
      padding : 10 ,
      backgroundColor : 'grey' ,
      borderColor: 'black',
      borderWidth : 1
    },
  });
export default GoalItem;