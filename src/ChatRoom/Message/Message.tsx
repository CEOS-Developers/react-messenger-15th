import { MessageItem, MessageList} from "../../type";
import {useRef,useEffect} from "react";
import {Wrapper,ChatMessage,ChatProfile,Chatcontainer,MessageBox,ChatName} from "./MessageDesign";
import user from "../../data/user.json";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageListState } from "../../recoil";
import chatting from "../../data/chat.json";

type IMessage = {
    roomId : number;
}

function Message({messageList} : MessageList){
    
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
                <Chatcontainer key ={message.roomId}>
                    <ChatProfile src = {user[message.roomId].profile} loading ="lazy"/> 
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