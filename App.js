import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/Goal/Item'
import GoalInput from './components/Goal/Input'

export default function App() {

  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addHandler = (goalTitle) => {
    setGoals(goals => [...goals, {id: Math.random().toString(), value: goalTitle}])
    setIsAddMode(false);
  }

  const removeHandler = goalId => {
    setGoals(goals => {
      return goals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addHandler} onCancelGoal={cancelHandler}/>

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
