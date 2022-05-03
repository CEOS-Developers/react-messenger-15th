import { useRecoilState } from 'recoil';
import { ChatDataType, UserType } from '../Interface';
import { chats, users } from '../states/recoil/recoil';

const useApi = () => {
    const [chatData, setChatData] = useRecoilState<ChatDataType[]>(chats);
    const [userData, setUserData] = useRecoilState<UserType[]>(users);
    const getChats = (roomId: number) => {
        const [chatObj] = chatData.filter((room) => room.roomId === roomId);
        console.log(chatObj);
        return chatObj.chat;
    };

    const getUserById = (userId: number) => {
        const userObj = userData.filter((user) => user.userId === userId);
        return userObj;
    };

    const getUserInfoByRoomId = (roomId: number) => {
        const [chatObj] = chatData.filter((room) => room.roomId === roomId);
        const userIdList = chatObj['user'].map((user) => user['userId']);

        //const userInfoList = userData.filter((user, index) => user.userId === userIdList[index]);
        const userInfoList = userIdList.map((userId) => getUserById(userId));
        return userInfoList;
    };

    return { getChats, getUserInfoByRoomId };
};

export default useApi;
