import { Dispatch, SetStateAction} from "react";

export interface Profileprops{
    changeUser : number;
    setChangeUser : Dispatch<SetStateAction<number>>
};

export interface MessageItem{

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