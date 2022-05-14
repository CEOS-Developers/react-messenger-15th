import { createReducer } from 'typesafe-actions';
import { INITIALIZE, TOGGLE } from './actions';
import { TReceiverAction, TReceiverState } from './types';
import meData from '../../assets/json/meData.json';

// 0 is just a dummy value for initialization.
const initialState: TReceiverState = {
  userId: 0,
};

export const receiver = createReducer<TReceiverState, TReceiverAction>(
  initialState,
  {
    [INITIALIZE]: (state, { payload: partnerUserId }) => ({
      ...state,
      userId: partnerUserId,
    }),
    [TOGGLE]: (state, { payload: partnerUserId }) => {
      if (state.userId === meData.userId) {
        return {
          ...state,
          userId: partnerUserId,
        };
      } else {
        return {
          ...state,
          userId: meData.userId,
        };
      }
    },
  }
);
