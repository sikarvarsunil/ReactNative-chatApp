/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
  Contact: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type CameraParamList = {
  CameraScreen: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type StatusParamList = {
  StatusScreen: undefined;
};

export type CallsParamList = {
  CallsScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imgUrl: String;
  status: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
