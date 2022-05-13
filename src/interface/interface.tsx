import { Params } from 'react-router-dom';

interface IMessageData {
  userId: string;
  userName: string;
  text: string;
  time: string;
}

interface ICurrentUser {
  userId: string;
  userName: string;
  userProfile: string;
  userStatus: string;
}

interface IUserNameProps {
  userName: string;
}

interface IUserNavProps {
  currentUser: ICurrentUser;
  setCurrentUser: (element: ICurrentUser) => void;
  otherUser: Readonly<Params<string>>;
}

interface IMessengerInputProps {
  currentUser: ICurrentUser;
  chatList: IMessageData[];
  setChatList: (charList: Array<IMessageData>) => void;
}

interface IChattingsProps {
  userId: string;
  userName: string;
  message: string;
}

interface IFriendsProps {
  userProfile: string;
  userName: string;
  userStatus: string;
}

interface IFilteredUser {
  filteredUser: (searchText: string) => void;
}
export type {
  IMessageData,
  IMessengerInputProps,
  IUserNavProps,
  IUserNameProps,
  IChattingsProps,
  IFriendsProps,
  IFilteredUser,
};
