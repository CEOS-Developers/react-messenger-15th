
import UserProfile from "./Profile/UserProfile";
import useMessageList from "./hook/useMessageList";
import Inputform from "./Input/InputForm";
import Message from "./Message/Message";
import {useParams} from 'react-router-dom';
import { userState } from "./recoil";
import {useRecoilState} from "recoil";

function ChatRoom(){

    const roomId = useParams();
    const roomIds = Number(roomId.friendId);

    const {messageList,setMessageList} = useMessageList(roomIds-1);
    const [changeUser,setChangeUser] = useRecoilState<number>(userState);

    return(
    <div id ="Wrapper">
        <UserProfile changeUser={changeUser} setChangeUser = {setChangeUser} currentUser ={roomIds} />
        <Message messageList={messageList}/>
        <Inputform changeUser={changeUser} messageList={messageList} setMessageList={setMessageList}></Inputform> 
    </div>
    );
}

export default ChatRoom;