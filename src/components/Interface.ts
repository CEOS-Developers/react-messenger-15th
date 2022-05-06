import { Dispatch, SetStateAction } from 'react';

interface IUserId {
  userId: string;
}

interface IChatProps extends IUserId {
  message: string;
  msgId: number;
}

interface IChatRoomBodyProps {
  chatList: IChatProps[];
  setChatList: Dispatch<SetStateAction<IChatProps[]>>;
}

interface IChatRoomHeaderProps extends IUserId {
  currentUserId: IUserId[];
  setCurrentUserId: Dispatch<SetStateAction<IUserId[]>>;
}

interface IInputFormProps {
  currentUserId;
  chatList;
  setChatList;
}

export type {
  IUserId,
  IChatProps,
  IChatRoomBodyProps,
  IChatRoomHeaderProps,
  IInputFormProps,
};
