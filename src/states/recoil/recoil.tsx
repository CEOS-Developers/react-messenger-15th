import { atom } from 'recoil';
import { ChatDataType, UserType } from '../../Interface';
import chatData from '../chatData.json';
import userData from '../userData.json';

export const chats = atom<ChatDataType[]>({
    key: 'chats',
    default: chatData.rooms,
});

export const users = atom<UserType[]>({
    key: 'users',
    default: userData.users,
});
