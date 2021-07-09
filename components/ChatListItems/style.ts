import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%'
  },
  container: {
    flexDirection: 'row'
  },
  contentCol: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 100
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  desc: {
    fontSize: 12,
    color: '#ccc',
    width: 200,
  },
  timestamp: {
    fontSize: 12,
    color: '#ccc',
    justifyContent: 'flex-end'
  }
});

export default styles;