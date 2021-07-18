import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import ContactListItems from '../components/ContactListItems';
import users from '../data/Users';

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        style={{width: '100%'}}
        data={users}
        renderItem = {({item}) => <ContactListItems user={item} />}
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
