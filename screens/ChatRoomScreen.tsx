import * as React from 'react';
import { StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chat';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/bg.webp'
import InputBox from '../components/InputBox';

export default function ChatRoomScreen() {
  const route = useRoute();
  return (
    <ImageBackground style={{
      width: '100%',
      height: '100%'
    }} source={BG}>
    <FlatList
    data={chatRoomData.messages}
    renderItem={({ item }) => <ChatMessage message={item} />}
    inverted
    />
    <InputBox />
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
