import { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Enter your name" style={styles.textInput} onChangeText={goalInputHandler} />
      <Button title="Add goal" onPress={() => props.onAddGoal(enteredGoalText)} />
    </View>
)
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
