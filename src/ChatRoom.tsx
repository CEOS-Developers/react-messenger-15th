
import UserProfile from "./Profile/UserProfile";
import useMessageList from "./hook/useMessageList";
import Inputform from "./Input/InputForm";
import Message from "./Message/Message";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {messageListState, userState} from "./recoil";
import chatting from "./data/chat.json";

function ChatRoom(){

    const roomId = useParams();
    const roomIds = Number(roomId.friendId);

    const {messageList,setMessageList} = useMessageList(roomIds-1);
    const [changeUser,setChangeUser] = useRecoilState<number>(userState);
    
    //const setmessageList = useSetRecoilState(messageListState);

    return(
    <div id ="Wrapper">
        <UserProfile currentUser ={roomIds} />
        <Message messageList={messageList}/>
        <Inputform messageList={messageList} setMessageList={setMessageList}/>
    </div>
    );
}

export default ChatRoom;