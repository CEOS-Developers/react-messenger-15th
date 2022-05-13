
 import chatting from "./data/chat.json";
 import {useNavigate} from 'react-router-dom';
 import useFilter from "./hook/useFilter";
 import {Header,FriendContainer,FriendProfile,FriendName,LastChat, FriendWrapper,FriendChat} from "./BasicListDesign";
import React, { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import { userState } from "./recoil";
 
 const ChatRoomList = () =>{
   
    const navigate = useNavigate();
    const friendList = useFilter();

    const resetUser = useResetRecoilState(userState);
    resetUser();
    
    const ChatRoomLink = useCallback((event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{navigate(`/ChatRoom/${roomId}`);
    },[]);

    return(
      <div id ="Wrapper">
           <Header>채팅</Header>
            <FriendWrapper>
              {
              friendList.map((friend)=> {
                const chatLength = chatting[friend.id-1].chat.length; //최근 채팅 불러오기 코드가 너무 불필요하게 긴 부분이 있음..
               return  (
              <>
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event,friend.id)}}>
              <FriendProfile src = {friend.profile} loading="lazy"/>
              <FriendChat>
                <FriendName>{friend.name}</FriendName>
                <LastChat>{chatting[friend.id-1].chat[chatLength-1].text}</LastChat>
              </FriendChat>
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


