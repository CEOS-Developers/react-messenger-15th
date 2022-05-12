import { Dispatch, SetStateAction } from 'react';

interface IUserId {
  userId: string;
}

interface IChat extends IUserId {
  message: string;
  msgId: number;
}

interface IChatRoomBodyProps {
  chatList: IChat[];
}

interface ICurrentUserId {
  currentUserId: string;
}

interface IChatRoomHeaderProps extends ICurrentUserId {
  setCurrentUserId: Dispatch<SetStateAction<string>>;
}

interface IInputFormProps extends ICurrentUserId, IChatRoomBodyProps {
  setChatList: Dispatch<SetStateAction<IChat[]>>;
}

interface IUserList {
  userId: string;
  userName: string;
  message: string;
}

export type {
  IUserId,
  ICurrentUserId,
  IChat,
  IChatRoomBodyProps,
  IChatRoomHeaderProps,
  IInputFormProps,
  IUserList,
};
