import { MessageItem } from "./type";
import {useRef,useEffect,useMemo} from "react";

type MessageList = {
    messageList : MessageItem[];
};
  
function Message({messageList} : MessageList){

    const messageRef = useRef<HTMLDivElement>(null);

    const ScrollEvent = useEffect(()=>{
         if(messageRef.current)
         messageRef.current.scrollTo({
            top: messageRef.current.scrollHeight,
            behavior: "smooth",
          });
    },[messageList]); //메세지리스트가 변할때만 스크롤에 대한 렌더링

}

export default Message;