import { IUserType } from "./user";

export interface IMessageType {
  id: number;
  text: string;
  user: IUserType;
  time: string;
}

export interface IInputMessageForm {
  sendMessage: (text: string) => void;
}

export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IEmoticonPopover extends IInputEmoticon {
  handlePopover: () => void;
}

export interface IChatListItem {
  msgInfo: {
    user: IUserType;
    messages: IMessageType[];
  };
}

export interface IList {
  img: string;
  title: string;
  subTitle: string;
}
