import { Dispatch, SetStateAction } from 'react';

interface IUserId {
  userId: string;
}

interface IChatProps extends IUserId {
  userId: string;
  message: string;
  msgId: number;
}

interface IChatRoomBodyProps {
  chatList: IChatProps[];
  setChatList: Dispatch<SetStateAction<IChatProps[]>>;
}

interface ICurrentUserId {
  currentUserId: string;
}

interface IChatRoomHeaderProps extends ICurrentUserId {
  setCurrentUserId: Dispatch<SetStateAction<string>>;
}

export type {
  IUserId,
  ICurrentUserId,
  IChatProps,
  IChatRoomBodyProps,
  IChatRoomHeaderProps,
};
