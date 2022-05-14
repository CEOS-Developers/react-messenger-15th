import { atom } from 'recoil';
import messageData from '../static/msg.json';
import userData from '../static/user.json';
import { IMessage, IUser } from '../../interfaces/data';

export const Message = atom<IMessage[]>({
  key: 'message',
  default: messageData.rooms,
});

export const userInfo = atom<IUser[]>({
  key: 'userInfo',
  default: userData.users,
});
