import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import ChatListItems from '../components/ChatListItems';
import chatRoom from '../data/ChatRoom'

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: '100%'}}
        data={chatRoom}
        renderItem = {({item}) => <ChatListItems chatRoom={item} />}
        keyExtractor = {(item) => item.id }
        horizontal = {false}
      />
    </View>
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
