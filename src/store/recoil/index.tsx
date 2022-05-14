import { atom } from 'recoil';
import { IUser } from '../../interfaces/data';

export const pathInfo = atom<string|null>({
  key: 'path',
  default: null,
});

export const searchToggleState = atom<boolean>({
  key: 'searchToggleState',
  default: false,
});
export const chatModalToggleState = atom<boolean>({
  key: 'chatModalToggleState',
  default: false,
});
export const friendModalToggleState = atom<boolean>({
  key: 'friendModalToggleState',
  default: false,
});

export const chatRoomToggleState = atom<boolean>({
  key: 'chatRoomToggleState',
  default: false,
});

export const userClicked = atom<string|null>({
  key: 'userClicked',
  default: null,
});

export const searchValue = atom<IUser[]|undefined>({
  key: 'searchValue',
  default: undefined,
});

export const closeWindow = atom<boolean>({
  key: 'closeWindow',
  default: false,
});
