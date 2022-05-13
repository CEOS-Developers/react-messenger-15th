
import {useState , useCallback} from "react";
import {Header,FriendWrapper,FriendContainer} from "../List/BasicListDesign";
import {useNavigate} from 'react-router-dom';
import React from "react";
import useFilter from "../hook/useFilter";
import { useRecoilState, useResetRecoilState } from "recoil";
import { searchState, userState } from "../recoil";
import Search from "../List/ChatList/Search";
import FriendLists from "../List/FriendList/FriendListDesign";
import ResetUser from "../List/ResetUser";

function FriendList(){

    const [search, setSearch] = useRecoilState<string>(searchState);
    const friendList = useFilter();
    const navigate = useNavigate();

    const searchFriend = friendList.filter((friend) => {
        return friend.name.includes(search);
      });

      const ChatRoomLink = useCallback((event : React.MouseEvent<HTMLDivElement> , roomId : number) =>{
        navigate(`/ChatRoom/${roomId}`);
    },[]);

    ResetUser();
    
    return(
       <div id ="Wrapper">
         <Header>친구 목록</Header>
         <Search/>
           <FriendWrapper>
             {
             searchFriend.map((friend)=> (
             <FriendContainer onClick = {(event) => {ChatRoomLink (event, friend.id)}}>
                 <FriendLists friend={friend}/>
             </FriendContainer>
              ))
              }
            </FriendWrapper>
       </div> 
    );
}

export default React.memo(FriendList);