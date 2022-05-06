import { useState,useMemo } from "react";
import UserProfile from "./UserProfile";
import styled  from "styled-components";
import useMessageList from "./useMessageList";
import Inputform from "./InputForm";

function ChatRoom(){

    const{messageList,setMessageList} = useMessageList();
    const [changeUser,setChangeUser] = useState<number>(0);

    const ChatWrapper = styled.div
    `
      flex:1;
      display : flex;
      flex-direction:column;
     
    `;

    return(
    <ChatWrapper>
        <UserProfile changeUser={changeUser} setChangeUser = {setChangeUser}/>
        <Inputform changeUser={changeUser} messageList={messageList} setMessageList={setMessageList}></Inputform> 
    </ChatWrapper>
    );
}

export default ChatRoom;