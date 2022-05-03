import { atom } from 'recoil';
import { ChatDataType } from '../../Interface';
import chatData from '../chatData.json';

export const chats = atom<ChatDataType[]>({
    key: 'chats',
    default: chatData['rooms'],
});
