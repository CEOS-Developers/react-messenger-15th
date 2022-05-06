import {useState,useCallback,useRef} from "react";
import { MessageItem } from "./type";
import chatting from "./data/chat.json";


const useMessageList = () => {
    const [messageList, setMessageList] = useState<MessageItem[]>(chatting[1].chat);
    return { messageList, setMessageList};
  };
  
  export default useMessageList;