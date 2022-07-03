import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, {useState} from 'react'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandeler(enteredText){
        setEnteredGoalText(enteredText);
      }

    function addGoalHandeler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    
  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/target.png')}/>
    <TextInput style={styles.textInput} placeholder='Your Course Goal'onChangeText={goalInputHandeler} value={enteredGoalText}/>
    <View style={styles.buttonConatiner}>
        <View style={styles.button}>
            <Button title='Add Goal!' onPress={addGoalHandeler} color='#B22222'/>
        </View>
        <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='red'/>
        </View>
    </View>
  </View>
    </Modal>
    
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF7F50'
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      },
      textInput:{
        borderWidth: 1,
        borderColor: '#f08080',
        backgroundColor: '#f08080',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
    buttonConatiner:{
        flexDirection: 'row',
        marginTop: 16
    },
    button:{
        width: '30%',
        marginHorizontal: 8
    }
})

export default GoalInput