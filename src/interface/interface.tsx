interface IChat {
  id: number;
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

interface IUserIdProps {
  userId: string;
}

export type { IChat, IMessengerInputProps, IUserNavProps, IUserIdProps };
