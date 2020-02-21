import React, {useState} from 'react'
import {View,Button, TextInput, StyleSheet} from 'react-native'


const Input = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
  }
    return (
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder="Goal"
                style = {styles.input}
                onChangeText = {inputHandler}
                value = {enteredGoal}
            />

            <Button 
                title="ADD"
                onPress={props.onAddGoal.bind(this,enteredGoal)} 
            />
        </View>
       

    )

}

const styles =  StyleSheet.create({
    inputContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: "80%"
      }
})

export default Input