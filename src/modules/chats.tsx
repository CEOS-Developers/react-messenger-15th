import { createAction, ActionType, createReducer } from 'typesafe-actions';
import chatsData from '../assets/json/chatsData.json';
import { IChat, IChats } from '../types';

const INITIALIZE = 'chats/INITIALIZE';
const CONCAT = 'chats/CONCAT';

// export const initChats = (partnerUserId: number) => ({
//   type: INITIALIZE,
//   payload: partnerUserId,
// });

export const initChats = createAction(INITIALIZE)<number>();

// export const concatNewChat = (newChat: IChat) => ({
//   type: CONCAT,
//   payload: newChat,
// });

export const concatNewChat = createAction(CONCAT)<IChat>();

// type TAction = ReturnType<typeof initChats> | ReturnType<typeof concatNewChat>;

const actions = { initChats, concatNewChat };
type TAction = ActionType<typeof actions>;

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

// export function chats(state: TState = initialState, action: TAction): TState {
//   switch (action.type) {
//     case INITIALIZE:
//       const chatsWithPartner = chatsData.filter(
//         (friend) => friend.userId === action.payload
//       )[0].data;
//       return {
//         ...state,
//         data: chatsWithPartner,
//       };
//     case CONCAT:
//       return {
//         ...state,
//         data: state.data.concat(action.payload),
//       };
//     default:
//       return state;
//   }
// }

export const chats = createReducer<TState, TAction>(initialState, {
  [INITIALIZE]: (state, { payload: partnerUserId }) => {
    const chatsWithPartner = chatsData.filter(
      (friend) => friend.userId === partnerUserId
    )[0].data;
    return {
      ...state,
      data: chatsWithPartner,
    };
  },
  [CONCAT]: (state, { payload: newChat }) => {
    return {
      ...state,
      data: state.data.concat(newChat),
    };
  },
});
