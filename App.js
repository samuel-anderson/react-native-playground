import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/Goal/Item'
import GoalInput from './components/Goal/Input'

export default function App() {

  const [goals, setGoals] = useState([])

  const addHandler = (goalTitle) => {
    setGoals(goals => [...goals, {id: Math.random().toString(), value: goalTitle}])

  }
  return (
    <View style={styles.root}>
      <GoalInput onAddGoal= {addHandler}/>

      <FlatList 
        keyExtractor= {(item, index) => item.id}
        data={goals} 
        renderItem= { itemData => <GoalItem onDelete={()=> console.log("Testing")} children={itemData.item.value} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  root:{
    padding:50
  },
  
  
  
})
