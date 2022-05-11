import { MessageItem } from "../type";
import {useRef,useEffect,useMemo} from "react";
import {Wrapper,ChatMessage,ChatProfile,Chatcontainer,MessageBox,ChatName} from "./MessageDesign";
import ProfileImage from "../Image"; 
import user from "../data/user.json";
import React from "react";
import me from "../data/me.json";

type MessageList = {
    messageList : MessageItem[];
    currentUser : number;
    changeUser :number;
};
  
function Message({messageList, currentUser,changeUser} : MessageList){

    const messageRef = useRef<HTMLDivElement>(null);

    const ScrollEvent = useEffect(()=>{
        if(messageRef.current)
        messageRef.current.scrollTo({
            top: messageRef.current.scrollHeight,
            behavior: "smooth",
        })
    },[messageList]); //메세지리스트가 변할때만 스크롤에 대한 렌더링


    return(
  
        <Wrapper ref={messageRef}>
            {messageList.map((message) => (
                <Chatcontainer key ={message.userId}>
               
                    <ChatProfile src = {user[message.roomId].profile}/> 
                     <MessageBox>
                        <ChatName>{user[message.roomId].name} 님의 말: </ChatName>
                        <ChatMessage>{message.text}</ChatMessage>   
                 </MessageBox>
            </Chatcontainer>
                ))
            }
            
        </Wrapper>
        
 
    );

}

export default React.memo(Message);