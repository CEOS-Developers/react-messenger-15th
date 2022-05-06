import { IUserType } from "./user";

interface IMessageType {
  id: number;
  text: string;
  user: IUserType;
  time: string;
}

export interface IMessageBallon {
  message: IMessageType;
}

export interface IInputMessageForm {
  sendMessage: (text: string) => void;
}

export interface IMessageChat {
  messages: IMessageType[];
}

export interface IMessageState {
  messages: IMessageType[];
  dispatch: React.Dispatch<IMessageAction>;
}

export type IMessageAction = {
  type: "ADD_MESSAGE";
  message: IMessageType;
};

export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IEmoticonPopover extends IInputEmoticon {
  handlePopover: () => void;
}
