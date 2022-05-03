import ChatItem from '../components/chatroom/ChatItem';
import { ChatType } from '../Interface';
import useApi from '../hooks/useApi';
const ChatRoom = ({ roomId }: { roomId: string }) => {
    const { getChats } = useApi();
    const chats = getChats(roomId);
    return (
        <>
            {chats.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
        </>
    );
};

export default ChatRoom;
