import chatsData from '../../assets/json/chatsData.json';
import { createReducer } from 'typesafe-actions';
import { CONCAT, INITIALIZE } from './actions';
import { TAction, TState } from './types';

const initialState: TState = {
  data: [
    {
      userId: 0,
      msg: 'Dummy',
      unixTime: 0,
    },
  ],
};

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
