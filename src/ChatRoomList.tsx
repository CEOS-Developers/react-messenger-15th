
 import user from "./data/user.json";
 import chatting from "./data/chat.json";
 import {useNavigate} from 'react-router-dom';
 import {Header,FriendContainer,FriendProfile,FriendName,LastChat, FriendWrapper} from "./BasicListDesign";
import React from "react";
 
 const ChatRoomList = () =>{
   
    const navigate = useNavigate();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    }
    
    return(
      <div id ="Wrapper">
           <Header>채팅</Header>
            <FriendWrapper>
              {
              user.map((friend)=> {

                //const chattingItem : MessageItem = chatting[friend.id].chat[0];
                
               return  (
              <>
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
              <FriendProfile src = {friend.profile} loading="lazy"/>
              <FriendName>{friend.name}</FriendName>
              </FriendContainer>
              </>
              );
            })
            }
            </FriendWrapper>
        </div>
    );
};


export default ChatRoomList;


