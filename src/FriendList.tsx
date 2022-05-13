
import {useState , useCallback} from "react";
import user from "./data/user.json";
import {Header,Input,FriendWrapper,FriendContainer,FriendProfile,FriendName,FriendIntro} from "./BasicListDesign";
import {useNavigate} from 'react-router-dom';
import React from "react";
import useFilter from "./hook/useFilter";

function FriendList(){

    const [search, setSearch] = useState<string>("");
    const navigate = useNavigate();
    const friendList = useFilter();
    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)},[]);
   
    const searchFriend = friendList.filter((friend) => {
        return friend.name.includes(search);
      });

      const ChatRoomLink = (event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    }

    return(
       <div id ="Wrapper">
         <Header>친구 목록</Header>
         <Input
           onChange={onChange}
           value={search}
           type="text"
           placeholder="🔎친구 검색"
           autoFocus = {true}
           spellCheck="false"
           />
           <FriendWrapper>
             {
             searchFriend.map((friend)=> (
             <FriendContainer onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
             <FriendProfile src = {friend.profile} loading="lazy"/>
             <FriendName>{friend.name}</FriendName>
             <FriendIntro introLength ={friend.intro.length}>{friend.intro}</FriendIntro>
             </FriendContainer>
              ))
              }
            </FriendWrapper>
       </div> 
    );
}

export default React.memo(FriendList);