import { atom } from 'recoil';
import { IMessageData } from '../interface/interface';

export const messageDataState = atom<IMessageData[]>({
  key: 'messageDataState',
  default: [],
});
