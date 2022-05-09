import { atom } from 'recoil';
import { ChatDataType, UserType, AuthType } from '../../Interface';
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

const getLocalStorage = (): AuthType => {
    const name = localStorage.getItem('name');
    const image = localStorage.getItem('image');
    if (name && image) {
        return {
            userName: name,
            profileImage: image,
            init: true,
        };
    } else {
        return {
            userName: '',
            profileImage: '',
            init: false,
        };
    }
};

export const authState = atom<AuthType>({
    key: 'auth',
    default: getLocalStorage(),
});
