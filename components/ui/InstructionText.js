import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function InstructionText({ children }) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    marginBottom: 8,
  },
});
