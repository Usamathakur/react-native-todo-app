import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <View>
    <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this,props.id)}>
            <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#B22222',
        padding: 8,
        color: 'white'
      }
})

export default GoalItem