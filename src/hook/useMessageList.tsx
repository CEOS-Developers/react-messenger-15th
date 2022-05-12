import {useState} from "react";
import { MessageItem } from "../type";
import chatting from "../data/chat.json";


const useMessageList = (roomIds:number) => {
    const [messageList, setMessageList] = useState<MessageItem[]>(chatting[roomIds].chat);
    return { messageList, setMessageList};
  };
  
  export default useMessageList;