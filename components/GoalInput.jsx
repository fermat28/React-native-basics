import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList } from 'react-native';


const GoalInput = props => {

    return (

      <View style={styles.container}>
      <TextInput
        placeholder="Course Goal"
        style={styles.button}
        onChangeText={goalInputHandler} 
        value={entrerdGoal}
      />
      <Button title="ADD" onPress={addGoalHandler} />
    </View>

    );

}
export default GoalInput;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row', //main Axis management
    justifyContent: 'space-between', //organize iteems along the main axis
    // Align : value to align element on the cross Axis
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '70%',
  }
});