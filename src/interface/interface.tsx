interface IChat {
  userId: string;
  userName: string;
  text: string;
  time: string;
}

interface ICurrentUser {
  userId: string;
  userName: string;
  userProfile: string;
}

interface IMessengerInputProps {
  currentUser: ICurrentUser;
  chatList: IChat[];
  setChatList: (charList: Array<IChat>) => void;
}

interface IUserNavProps {
  currentUser: ICurrentUser;
  switchUser: () => void;
}

export type { IChat, IMessengerInputProps, IUserNavProps };
