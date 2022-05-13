
import UserProfile from "../ChatRoom/Profile/UserProfile";
import useMessageList from "../hook/useMessageList";
import Inputform from "../ChatRoom/Input/InputForm";
import Message from "../ChatRoom/Message/Message";
import {useParams} from 'react-router-dom';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {messageListState, userState} from "../recoil";

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