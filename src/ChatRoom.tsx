import { useState,useMemo } from "react";
import UserProfile from "./Profile/UserProfile";
import styled  from "styled-components";
import useMessageList from "./hook/useMessageList";
import Inputform from "./Input/InputForm";
import Message from "./Message/Message";

function ChatRoom(){

    const{messageList,setMessageList} = useMessageList();
    const [changeUser,setChangeUser] = useState<number>(0);

    return(
    <div id ="Wrapper">
        <UserProfile changeUser={changeUser} setChangeUser = {setChangeUser}/>
        <Message messageList={messageList}/>
        <Inputform changeUser={changeUser} messageList={messageList} setMessageList={setMessageList}></Inputform> 
    </div>
    );
}

export default ChatRoom;