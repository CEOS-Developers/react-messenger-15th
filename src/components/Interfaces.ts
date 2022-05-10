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

interface IChatRoomScreenProps
  extends IChatRoomBodyProps,
    IChatRoomHeaderProps {
  setChatList: Dispatch<SetStateAction<IChat[]>>;
}

interface IInputFormProps extends IChatRoomHeaderProps, IChatRoomBodyProps {
  setChatList: Dispatch<SetStateAction<IChat[]>>;
}

export type {
  IUserId,
  ICurrentUserId,
  IChat,
  IChatRoomBodyProps,
  IChatRoomHeaderProps,
  IChatRoomScreenProps,
  IInputFormProps,
};
