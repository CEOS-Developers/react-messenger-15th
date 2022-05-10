import { RoomType, UserType } from '../Interface';

// userId 로 유저 정보 가져오기
export const getUserInfoById = (userId: number, userData: UserType[]): UserType => {
    const [userObj] = userData.filter((user) => user.userId === userId);
    return userObj;
};

// userId로 roomId 가져오기 (갠톡)
export const getRoomIdByUser = (userId: number, chatData: RoomType[]): number => {
    const [chatObj] = chatData.filter((room) => room.user[1]['userId'] === userId);
    return chatObj.roomId;
};
