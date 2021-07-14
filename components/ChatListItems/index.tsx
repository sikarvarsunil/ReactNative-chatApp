import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import dayjs from 'dayjs';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { ChatRoom } from '../../types';

export type ChatListItemsProps = {
  chatRoom: ChatRoom,
}

const ChatListItems = (props: ChatListItemsProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[1];

  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: user?.name,
      avatar: user?.imageUrl
    });
  }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={{uri: user?.imageUrl }} style={styles.avatar} />
        <View style={styles.contentCol}>
          <Text style={styles.userName}>{user?.name }</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.desc}>{chatRoom.lastMessage.content }</Text>
        </View>
       
      </View>
    <Text style={styles.timestamp}>{dayjs(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ChatListItems;