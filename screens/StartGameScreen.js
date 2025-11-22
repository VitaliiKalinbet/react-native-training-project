import { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors'; 
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
      return;
    }
    setEnteredNumber('');
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 400 ? 30 : 50;

  return (
    <View style={[styles.rootScreen, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )  
}

// const deviceHeight = Dimensions.get('window').height;

// console.log(deviceHeight);

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 50,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    marginBottom: 8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },
});
