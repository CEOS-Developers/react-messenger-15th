
 import user from "./data/user.json";
 import chatting from "./data/chat.json";
 import {useNavigate} from 'react-router-dom';
 import {Header,FriendContainer,FriendProfile,FriendName,LastChat} from "./BasicListDesign";
 
 const ChatRoomList = () =>{
   
    const navigate = useNavigate();

    const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    }
    
    return(
        <div id ="Wrapper">
           <Header>채팅</Header>
            {
              user.map((friend)=> {

                //const chattingItem : MessageItem = chatting[friend.id].chat[0];
                
               return  (
              <>
              <FriendContainer key ={friend.id} onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
              <FriendProfile src = {friend.profile}/>
              <FriendName>{friend.name}</FriendName>
              <LastChat>{chatting[1].chat[0].text}</LastChat>
              </FriendContainer>
              </>
              );
            })
              }
        </div>
    );
};


export default ChatRoomList;


