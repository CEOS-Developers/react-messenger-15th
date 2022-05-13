
 import chatting from "./data/chat.json";
 import {useNavigate} from 'react-router-dom';
 import useFilter from "./hook/useFilter";
 import {Header,FriendContainer,FriendProfile,FriendName,LastChat, FriendWrapper} from "./BasicListDesign";
import React from "react";
 
 const ChatRoomList = () =>{
   
    const navigate = useNavigate();
    const friendList = useFilter();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    }

    return(
      <div id ="Wrapper">
           <Header>채팅</Header>
            <FriendWrapper>
              {
              friendList.map((friend)=> {

                const chatLength = chatting[friend.id-1].chat.length; //최근 채팅 불러오기 코드가 너무 불필요하게 긴 부분이 있음..
               return  (
              <>
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
              <FriendProfile src = {friend.profile} loading="lazy"/>
              <FriendName>{friend.name}</FriendName>
              <LastChat>{chatting[friend.id-1].chat[chatLength-1].text}</LastChat>
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


