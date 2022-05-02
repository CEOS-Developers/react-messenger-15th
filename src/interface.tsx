export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IMessageType {
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

export type IMessageAction = { type: "ADD_MESSAGE"; message: IMessageType };

export interface IUserType {
  id: number;
  name: string;
}

export interface IUserState {
  currentUser: IUserType;
  dispatch: React.Dispatch<IUserAction>;
}

export interface IUserAction {
  type: "TOGGLE_USER";
  name: string;
}
