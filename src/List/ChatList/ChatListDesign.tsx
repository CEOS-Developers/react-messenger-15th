import { FriendProfile, FriendChat, FriendName, LastChat, IFriendItem } from "../BasicListDesign";
import chatting from "../../data/chat.json";

function ChatLists({friend}:IFriendItem){

    const chatLength = chatting[friend.id-1].chat.length; //최근 채팅 불러오기 코드가 너무 불필요하게 긴 부분이 있음..

    return(
        <>
        <FriendProfile src = {friend.profile} loading="lazy"/>
        <FriendChat>
            <FriendName>{friend.name}</FriendName>
            <LastChat>{chatting[friend.id-1].chat[chatLength-1].text}</LastChat>
        </FriendChat>
        </>
    );
}

export default ChatLists;