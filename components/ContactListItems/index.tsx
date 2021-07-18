import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { User } from "../../types";

export type ContactListItemsProps = {
  user: User,
}

const ContactListItems = (props: ContactListItemsProps) => {
  const { user } = props;

  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('Contact')
  }
  console.warn('message', user);
  return (
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={{uri: user?.imageUrl }} style={styles.avatar} />
        <View style={styles.contentCol}>
          <Text style={styles.userName}>{user?.name }</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.status}>{user.status }</Text>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default ContactListItems;