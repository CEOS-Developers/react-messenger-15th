import { atom } from 'recoil';
import messageData from '../static/msg.json';
import userData from '../static/user.json';
export const Message = atom({
  key: 'message',
  default: messageData.rooms,
});

export const userInfo = atom({
  key: 'userInfo',
  default: userData.users,
});
