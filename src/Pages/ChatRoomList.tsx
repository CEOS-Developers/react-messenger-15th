
 import {useNavigate} from 'react-router-dom';
 import useFilter from "../hook/useFilter";
 import {Header,FriendContainer,FriendWrapper} from "../List/BasicListDesign";
import React, { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import { userState } from "../recoil";
import ChatLists from "../List/ChatList/ChatListDesign";
import ResetUser from "../List/ResetUser";
 
 const ChatRoomList = () =>{
   
    const navigate = useNavigate();
    const friendList = useFilter();

    const ChatRoomLink = useCallback((event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{navigate(`/ChatRoom/${roomId}`);
    },[]);
    
    ResetUser();

    return(
      <div id ="Wrapper">
           <Header>채팅</Header>
            <FriendWrapper>
              {
              friendList.map((friend)=> {
               return  (
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event,friend.id)}}>
                <ChatLists friend={friend}/>
              </FriendContainer>
              );
            })
            }
            </FriendWrapper>
        </div>
    );
};


export default ChatRoomList;


