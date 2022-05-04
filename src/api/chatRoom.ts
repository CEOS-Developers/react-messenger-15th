import { useRecoilValue } from 'recoil';
import { ChatDataType, UserType } from '../Interface';
import { chats, users } from '../store/recoil/recoil';
import { GetUserInfoById } from './userInfo';

export const GetChats = (roomId: number) => {
    const chatData = useRecoilValue<ChatDataType[]>(chats);
    const [chatObj] = chatData.filter((room) => room.roomId === roomId);
    console.log(chatObj);
    return chatObj.chat;
};

export const GetUserIdListByRoom = (roomId: number) => {
    const chatData = useRecoilValue<ChatDataType[]>(chats);
    const [chatObj] = chatData.filter((room) => room.roomId === roomId);
    const userIdList = chatObj['user'].map((user) => user['userId']);
    return userIdList;
};

export const GetUserInfoListByRoomId = (roomId: number) => {
    const userIdList = GetUserIdListByRoom(roomId);
    //const userInfoList = userData.filter((user, index) => user.userId === userIdList[index]);
    const userInfoList = userIdList.map((userId) => GetUserInfoById(userId));
    return userInfoList;
};
