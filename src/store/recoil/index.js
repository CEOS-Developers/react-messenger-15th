import { atom } from 'recoil';

export const pathInfo = atom({
  key: 'path',
  default: null,
});

export const searchToggleState = atom({
  key: 'searchToggleState',
  default: false,
});
export const chatModalToggleState = atom({
  key: 'chatModalToggleState',
  default: false,
});
export const friendModalToggleState = atom({
  key: 'friendModalToggleState',
  default: false,
});

export const chatRoomToggleState = atom({
  key: 'chatRoomToggleState',
  default: false,
});

export const userClicked = atom({
  key: 'userClicked',
  default: null,
});

export const searchValue = atom({
  key: 'searchValue',
  default: null,
});

export const closeWindow = atom({
  key: 'closeWindow',
  default: false,
});
