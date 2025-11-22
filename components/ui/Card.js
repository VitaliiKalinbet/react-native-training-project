import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

export default function Card({ children }) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // for Android only, instead boxShadow
    shadowColor: 'black', // for iOS only
    shadowOffset: { width: 0, height: 2 }, // for iOS only
    shadowRadius: 6, // for iOS only
    shadowOpacity: 0.25, // for iOS only
  },
});
