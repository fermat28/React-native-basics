import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.delete.bind(this, props.id)}
    >
      <View style={styles.goalmap}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalmap: {
    margin: 10,
    padding: 10,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default GoalItem;
