import { SetterOrUpdater } from 'recoil';
import { ChatDataType, ChatType, UserType } from '../Interface';
import { getUserInfoById } from './userInfo';

// 채팅 내역 가져오기
export const getChats = (roomId: number, chatData: ChatDataType[]): ChatType[] => {
    const [chatObj] = chatData.filter((room) => room.roomId === roomId);
    return chatObj.chat;
};

// 채팅방 내 대화상대 id 가져오기
export const getUserIdListByRoom = (roomId: number, chatData: ChatDataType[]): number[] => {
    const [chatObj] = chatData.filter((room) => room.roomId === roomId);
    const userIdList = chatObj['user'].map((user) => user['userId']);
    return userIdList;
};

// 채팅방 내 대화상대 정보 가져오기
export const getUserInfoListByRoomId = (roomId: number, chatData: ChatDataType[], userData: UserType[]): UserType[] => {
    const userIdList = getUserIdListByRoom(roomId, chatData);
    //const userInfoList = userData.filter((user, index) => user.userId === userIdList[index]);
    const userInfoList = userIdList.map((userId) => getUserInfoById(userId, userData));
    return userInfoList;
};

// 채팅보내기
export const postMessage = (roomId: number, MessageObj: ChatType, chatData: ChatDataType[], setChatData: SetterOrUpdater<ChatDataType[]>) => {
    const [chatObj] = chatData.filter((room) => room.roomId === roomId);

    const newChatObj: ChatDataType = { ...chatObj, chat: [...chatObj.chat, MessageObj] };
    setChatData(chatData.map((room) => (room.roomId === roomId ? newChatObj : room)));
    return { status: 200 };
};
