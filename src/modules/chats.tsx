import chatsData from '../assets/json/chatsData.json';
import { IChat, IChats } from '../types';

const INITIALIZE = 'chats/INITIALIZE' as const;
const CONCAT = 'chats/CONCAT' as const;

export const initChats = (partnerUserId: number) => ({
  type: INITIALIZE,
  payload: partnerUserId,
});

export const concatNewChat = (newChat: IChat) => ({
  type: CONCAT,
  payload: newChat,
});

type TAction = ReturnType<typeof initChats> | ReturnType<typeof concatNewChat>;

type TState = {
  data: IChats;
};

const initialState: TState = {
  data: [
    {
      userId: 0,
      msg: 'Dummy',
      unixTime: 0,
    },
  ],
};

export function chats(state: TState = initialState, action: TAction): TState {
  switch (action.type) {
    case INITIALIZE:
      const chatsWithPartner = chatsData.filter(
        (friend) => friend.userId === action.payload
      )[0].data;
      return {
        ...state,
        data: chatsWithPartner,
      };
    case CONCAT:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
}
