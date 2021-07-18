import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () => {
  const [ message, setMessage ] = useState('');


  const onMicrophonePress = () => {
    console.warn(message, 'Microphone');

  }
  const onSendPress = () => {
    console.warn(message, `Sending ${message}`);
  }
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  }

  return (
    <View style={styles.container}>
    <View style={styles.mainContainer}>
      <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
      <TextInput
        placeholder="Type a message"
        style={styles.textInput}
        multiline
        value={message}
        onChangeText={setMessage}/>
      <Entypo name="attachment" size={24} color="grey" style={styles.attachment}/>
      {!message && <Fontisto name="camera" size={24} color="grey" />}
    </View>
    <TouchableOpacity onPress={onPress}>
    <View style={styles.bottomContainer}>
      {!message
        ? <MaterialCommunityIcons name="microphone" size={28} color="white"/>
        :<MaterialIcons name="send" size={28} color="white"/>
      }
    </View>
    </TouchableOpacity>
  </View>
  )
}
export default InputBox;