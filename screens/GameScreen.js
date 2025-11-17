import { View, Text, StyleSheet, Button } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Button title="Higher" onPress={() => {}} />
          <Button title="Lower" onPress={() => {}} />
        </View>
        <View>
          <Text>Guess Number</Text>
        </View>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
