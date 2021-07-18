import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    fontWeight: '600',
    color: '#000'
  },
  status: {
    fontSize: 12,
    color: '#ccc',
    width: 200,
  },
});

export default styles;