 import styled  from "styled-components";
 import user from "./data/user.json";
 import chatting from "./data/chat.json";
 import {useState} from "react";
 import {FriendItem} from "./type";
 import {useNavigate} from 'react-router-dom';
 import {FriendContainer,FriendProfile,FriendName} from "./FriendListDesign";
 const ChatRoomList = () =>{
   

    const [friendList, setFriendList] = useState<FriendItem[]>(user); 
    const navigate = useNavigate();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement>) =>{
        navigate('/ChatRoom');
    }

    return(
        <div id ="Wrapper">
            {
              friendList.map((friend)=> (
              <>
              <FriendContainer onClick ={ChatRoomLink}>
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