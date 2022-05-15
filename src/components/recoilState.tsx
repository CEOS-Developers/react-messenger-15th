import { atom } from 'recoil';

export const initialText = atom<string>({
  key: 'inputText',
  default: '',
});
