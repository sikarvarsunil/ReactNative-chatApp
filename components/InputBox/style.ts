import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderRadius: 25,
    marginRight: 10
    
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10
  },
  attachment: {
    marginRight: 10
  },
  bottomContainer: {
    backgroundColor: Colors.light.tint,
    flexDirection: "row",
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
    
  }
})

export default styles;