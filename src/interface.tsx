export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IEmoticonPopover extends IInputEmoticon {
  handlePopover: () => void;
}

interface IMessageType {
  id: number;
  text: string;
  user: IUserType;
  time: string;
}

export interface IMessageBallon {
  message: IMessageType;
}

export interface IMessageState {
  messages: IMessageType[];
  dispatch: React.Dispatch<IMessageAction>;
}

export type IMessageAction = {
  type: "ADD_MESSAGE";
  message: IMessageType;
};

interface IUserType {
  id: number;
  name: string;
  profileImg: string;
}

export interface IUserState {
  users: IUserType[];
  currentUser: IUserType;
  dispatch: React.Dispatch<IUserAction>;
}

export interface IUserAction {
  type: "TOGGLE_USER";
  currentIdx: number;
}
