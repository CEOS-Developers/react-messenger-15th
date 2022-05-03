import { useRecoilState } from 'recoil';
import { ChatDataType } from '../Interface';
import { chats } from '../states/recoil/chats';

const useApi = () => {
    const [chatData, setChatData] = useRecoilState<ChatDataType[]>(chats);

    const getChats = (roomId: string) => {
        const chatObj = chatData.filter((room) => room.roomId == roomId);
        return chatObj[0].chat;
    };

    return { getChats };
};

export default useApi;
