import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goaltile) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goaltile },
    ]);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <View>
      <GoalInput onadd={addGoalHandler} />
      <View>
        <FlatList
          keyExtractor={(item, index) => item.key}
          data={courseGoals}
          renderItem={(itmdta) => (
            <GoalItem id = {itmdta.item.id}
              title={itmdta.item.value}
              delete={removeGoalHandler}
            />
          )}
        />
      </View>
    </View>
  );
}
