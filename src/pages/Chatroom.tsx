import ChatItem from '../components/chatroom/ChatItem';
import { ChatType } from '../Interface';
import * as api from '../api';
import { useState } from 'react';

const ChatRoom = ({ roomId }: { roomId: number }) => {
    const { GetChats, GetUserInfoListByRoomId } = api;
    const chats = GetChats(roomId);
    const userList = GetUserInfoListByRoomId(roomId);
    console.log(userList);
    const [me, setMe] = useState(userList[0]);
    const toggleMe = () => {};

    return (
        <>
            {chats.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
        </>
    );
};

export default ChatRoom;
