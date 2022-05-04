import ChatItem from '../components/chatroom/ChatItem';
import { ChatType } from '../Interface';
import * as api from '../api';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { chatState, userState } from '../store/recoil/recoil';
import { ChatDataType, UserType } from '../Interface';
import SendMessage from '../components/chatroom/SendMessage';

const ChatRoom = ({ roomId }: { roomId: number }) => {
    const chatData = useRecoilValue<ChatDataType[]>(chatState);
    const userData = useRecoilValue<UserType[]>(userState);
    const { getChats, getUserInfoListByRoomId } = api;

    const chats = getChats(roomId, chatData);
    const userList = getUserInfoListByRoomId(roomId, chatData, userData);

    return (
        <>
            {chats.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
            <SendMessage roomId={roomId} chatData={chatData} />
        </>
    );
};

export default ChatRoom;
