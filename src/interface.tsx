export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IMessageType {
  id: number;
  text: string;
  user: string;
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
