/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import TaskComponent from './TaskComponent';


function App(): React.JSX.Element {
  const [task, setTask] = useState<any>()
  const [taskItems, setTaskItems] = useState<any>([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    if (task !== null) {
      setTaskItems([...taskItems, task])
      setTask(null)
    }
    else Alert.alert('Caution', 'Task is not been allow empty content')
  }

  const deleteTask = (index: number) => {
    const itemCopy = [...taskItems]
    itemCopy.splice(index, 1)
    setTaskItems(itemCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
        <View style={styles.taskWrapper}>
          <Text style={styles.textTitle}>Today’s tasks</Text>
          <View>
            {
              taskItems.map((item: string, index: number) => {
                return (
                  <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                    <TaskComponent text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.taskInput} value={task} placeholder='Write a task' onChangeText={text => setTask(text)} />
          <TouchableOpacity style={styles.btn} onPress={handleAddTask}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 40,
  },
  taskInput: {
    width: 246,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 52,
    backgroundColor: '#55BCF6'
  },
  btnText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
  }
});

export default App;
