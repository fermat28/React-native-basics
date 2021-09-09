import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList } from 'react-native';
import GoalItem from './components/Goalitem';

export default function App() {
  const [entrerdGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...courseGoals, { key : Math.random().toString() , value : entrerdGoal}]);
  };
  return (
    <View>
     
      <View >
      <FlatList
      keyExtractor = {(item , index) => item.key}
       data = {courseGoals}  renderItem = {itmdta => <GoalItem title={itmdta.item.value}/>}/>
      </View>
    </View>
  );
}

