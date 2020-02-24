import React, {useState} from 'react'
import {View,Button, TextInput, StyleSheet, Modal} from 'react-native'


const Input = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = ()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    const cancelGoalHandler = () => {
        props.onCancelGoal();
        setEnteredGoal("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder="Goal"
                    style = {styles.input}
                    onChangeText = {inputHandler}
                    value = {enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.cancelButton}>
                        <Button 
                            title="CANCEL"
                            color="white"
                            onPress={cancelGoalHandler} 
                        />
                    </View>
                    <View style={styles.addButton}>
                        <Button 
                            title="ADD"
                            color="white"
                            onPress={addGoalHandler} 
                            
                        />
                    </View>
                </View>
            </View>
        </Modal>
       

    )

}

const styles =  StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 10
      },
      buttonContainer:{
          flexDirection:"row",
          justifyContent:"space-between",
          width:"60%"
      },
      cancelButton:{
          backgroundColor:"red",
          width:"40%"
      },
      addButton:{
          backgroundColor:"blue",
          width:"40%"
      }
})

export default Input