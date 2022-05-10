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
  setChatList: Dispatch<SetStateAction<IChatProps[]>>;
}

interface IInputFormProps extends IChatRoomHeaderProps, IChatRoomBodyProps {
  setChatList: Dispatch<SetStateAction<IChatProps[]>>;
}

export type {
  IUserId,
  ICurrentUserId,
  IChatProps,
  IChatRoomBodyProps,
  IChatRoomHeaderProps,
  IChatRoomScreenProps,
  IInputFormProps,
};
