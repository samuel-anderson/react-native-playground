import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/Goal/Item'
import GoalInput from './components/Goal/Input'

export default function App() {

  const [goals, setGoals] = useState([])

  const addHandler = (goalTitle) => {
    setGoals(goals => [...goals, {id: Math.random().toString(), value: goalTitle}])

  }

  const removeHandler = goalId => {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
    <View style={styles.root}>
      <GoalInput onAddGoal= {addHandler}/>

      <FlatList 
        keyExtractor= {(item, index) => item.id}
        data={goals} 
        renderItem= { itemData => <GoalItem id={itemData.item.id} onDelete={removeHandler} children={itemData.item.value} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  root:{
    padding:50
  },
  
  
  
})
