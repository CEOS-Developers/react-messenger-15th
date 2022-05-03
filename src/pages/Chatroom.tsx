import { useState } from 'react';
import ChatItem from '../components/chatroom/ChatItem';
import chats from '../data/chats.json';
import { ChatType } from '../Interface';

interface ChatRoomProps {
    roomId: string;
}

const ChatRoom = ({ roomId }: ChatRoomProps) => {
    const [chatsObject, setChatsObject] = useState(chats);
    const chatArr = chatsObject['rooms'].filter((room) => room.roomId == roomId);
    const chatData = chatArr[0].chat;
    return (
        <>
            {chatData.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
        </>
    );
};

export default ChatRoom;
