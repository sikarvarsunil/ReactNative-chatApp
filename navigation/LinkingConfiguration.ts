/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Camera: {
            screens: {
              CameraScreen: 'Camera',
            },
          },
          Chats: {
            screens: {
              ChatsScreen: 'Chats',
            },
          },
          Status: {
            screens: {
              StatusScreen: 'Status',
            },
          },
          Calls: {
            screens: {
              CallsScreen: 'Calls',
            },
          }
        },
      },
      ChatRoom: 'ChatRoom',
      NotFound: '*',
    },
  },
};
