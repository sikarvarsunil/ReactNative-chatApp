/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, Image } from 'react-native';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors'
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContactScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',

      }}>
      <Stack.Screen name="Root" component={MainTabNavigator} 
      options={{
        title: 'WhatsApp',
        headerRight: () => <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 60,
          marginRight: 10
        }}>
            <Octicons name="search" size={24} color="white"/>
            <MaterialCommunityIcons name="dots-vertical" size={24} color="white"/>
          </View>
      }}/>
      <Stack.Screen 
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route?.params?.name,
          headerTitleContainerStyle: {
            left: 85,
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
          headerBackImage: () => <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: 60,
          }}>
            <MaterialIcons name="chevron-left" size={34} color="white"/>
            <Image
              style={{ width: 30, height: 30, borderRadius: 100, paddingRight: 5, }}
              source={{uri: route?.params?.avatar}}
              resizeMode='contain'
            /></View>,
          headerRight: () => <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 10,
            paddingRight: 5
          }}>
              <FontAwesome5 name="video" size={20} color="white"/>
              <MaterialIcons name="call" size={20} color="white"/>
              <MaterialCommunityIcons name="dots-vertical" size={20} color="white"/>
            </View>
        })}
      />
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
