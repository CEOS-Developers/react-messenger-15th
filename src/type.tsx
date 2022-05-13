import { Dispatch, SetStateAction} from "react";

export interface Profileprops{
    currentUser : number;
};

export interface MessageItem{

    roomId : number;
    userId : number;
    text: string;
   
  }

export interface FriendItem{

    id : number;
    name : string;
    intro : string;
    profile: string;
}

export interface ChatItem{

    roomId : number;
    chat : MessageItem[];

}

export type MessageList = {
    messageList : MessageItem[];
};