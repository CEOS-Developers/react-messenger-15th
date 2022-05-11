 import styled  from "styled-components";
 import user from "./data/user.json";
 import chatting from "./data/chat.json";
 import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState} from "react";
 import {FriendItem,ChatItem} from "./type";
 import {useNavigate} from 'react-router-dom';
 import {FriendContainer,FriendProfile,FriendName} from "./FriendListDesign";
 const ChatRoomList = () =>{
   

    const [chatList, setChatList] = useState<ChatItem[]>(chatting); 
    const [friendList, setFriendList] = useState<FriendItem[]>(user);

    const navigate = useNavigate();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    }

    
    return(
        <div id ="Wrapper">
            {
              friendList.map((friend)=> (
              <>

              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
              <FriendProfile src = {friend.profile}/>
              <FriendName>{friend.name}</FriendName>
              </FriendContainer>
              </>
              ))
              }
        </div>
    );
};


export default ChatRoomList;


