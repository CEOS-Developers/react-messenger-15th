import { IUserType } from "./user";
import { IMessageType } from "./message";

export interface IChatListItem {
  id: number;
  user: IUserType[];
  messages: IMessageType[];
}

export interface IChatRoomState {
  message: IMessageType[];
  currentUser: IUserType;
}

export interface IList {
  link: number;
  img: string;
  title: string;
  subTitle: string;
}

export interface ISearch {
  filter: (text: string) => void;
}
