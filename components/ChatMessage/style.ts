import { StyleSheet } from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    marginRight: 15,
    padding: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'right',
    justifyContent: 'flex-end'
  },
  msgName: {
    color: Color.light.tint,
    fontStyle: "italic"
  },
  msgText: {
    fontSize: 14,
    fontWeight: "700",
  }
});

export default styles;