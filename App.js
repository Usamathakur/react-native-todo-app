import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandeler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandeler(){
    setModalIsVisible(false)
  }

  function addGoalHandeler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()} ]);
      endAddGoalHandeler();
  }
  function deleteGoalHandeler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id )
    })
    }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#B22222' onPress={startAddGoalHandeler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandeler} onCancel={endAddGoalHandeler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData => {
        return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandeler} />
      }} keyExtractor={(item,index)=>{
        return item.id;
      }}/>
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16  
  },
  goalsContainer:{
    flex: 4
  },
  
});
