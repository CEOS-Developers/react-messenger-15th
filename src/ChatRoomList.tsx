 import styled  from "styled-components";
 import user from "./data/user.json";
 import chatting from "./data/chat.json";
 import {useState} from "react";
 import {FriendItem,ChatItem} from "./type";
 import {useNavigate} from 'react-router-dom';
 import {Header,FriendContainer,FriendProfile,FriendName,LastChat} from "./FriendListDesign";
 
 const ChatRoomList = () =>{
   

    const [chatList, setChatList] = useState<ChatItem[]>(chatting); 
    const [friendList, setFriendList] = useState<FriendItem[]>(user);

    const navigate = useNavigate();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`, { replace: true });
    }

    
    return(
        <div id ="Wrapper">
           <Header>채팅</Header>
            {
              friendList.map((friend)=> {
               return  (
              <>
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
              <FriendProfile src = {friend.profile}/>
              <FriendName>{friend.name}</FriendName>
              <LastChat>{chatting[1].chat[0].text}</LastChat>
              </FriendContainer>
              </>);
            })
              }
        </div>
    );
};


export default ChatRoomList;


