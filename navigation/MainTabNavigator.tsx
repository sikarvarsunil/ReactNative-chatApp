/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScreen from '../screens/CameraScreen';
import ChatScreen from '../screens/ChatScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';
import { MainTabParamList, CameraParamList, ChatsParamList, StatusParamList, CallsParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
      style: {
        backgroundColor: Colors[colorScheme].tint,
      },
      indicatorStyle: {
        backgroundColor: Colors[colorScheme].background,
        height: 4
      },
      labelStyle: {
        fontWeight: 'bold'
      },
      showIcon: true
      }}
      >
      <MainTab.Screen
        name="Camera"
        component={CameraNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={StatusNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={CallsNavigator}
      />
    </MainTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const CameraStack = createStackNavigator<CameraParamList>();

function CameraNavigator() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="CameraScreen"
        component={CameraScreen}
      />
    </CameraStack.Navigator>
  );
}

const ChatsStack = createStackNavigator<ChatsParamList>();

function ChatsNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name="ChatsScreen"
        component={ChatScreen}
      />
    </ChatsStack.Navigator>
  );
}

const StatusStack = createStackNavigator<StatusParamList>();

function StatusNavigator() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen
        name="StatusScreen"
        component={StatusScreen}
      />
    </StatusStack.Navigator>
  );
}

const CallsStack = createStackNavigator<CallsParamList>();

function CallsNavigator() {
  return (
    <CallsStack.Navigator>
      <CallsStack.Screen
        name="CallsScreen"
        component={CallsScreen}
      />
    </CallsStack.Navigator>
  );
}