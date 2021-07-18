import React from 'react';
import { View, Text } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import styles from './style';
import { Message } from '../../types';

export type ChatMessageProps = {
  message: Message,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  dayjs.extend(relativeTime);
  const isMyMessage = () => {
    return message.user.id === 'u1';
  }
  return (
      <View style={styles.container}>
        <View style={{
          borderRadius: 4,
          padding: 10,
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50
        }}>
          {isMyMessage() && <Text style={styles.msgName}>{message?.user.name }</Text>}
          <Text style={styles.msgText}>{message?.content }</Text>
          {message.createdAt && <Text style={styles.timestamp}>{dayjs(new Date(message.createdAt)).fromNow()}</Text>}
        </View>
    </View>
  )
}

export default ChatMessage;