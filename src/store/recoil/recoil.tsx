import { atom } from 'recoil';
import { ChatDataType, UserType } from '../../Interface';
import chatData from '../chatData.json';
import userData from '../userData.json';

export const chatState = atom<ChatDataType[]>({
    key: 'chats',
    default: chatData.rooms,
});

export const userState = atom<UserType[]>({
    key: 'users',
    default: userData.users,
});
