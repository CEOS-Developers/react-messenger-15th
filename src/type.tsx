import { Dispatch, SetStateAction} from "react";

export interface Profileprops{
    changeUser : number;
    setChangeUser : Dispatch<SetStateAction<number>>
};

export interface MessageItem{

    userId : number;
    text: string;
   
  }