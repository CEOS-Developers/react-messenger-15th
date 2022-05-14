import { createAction, ActionType, createReducer } from 'typesafe-actions';
import meData from '../../assets/json/meData.json';

const INITIALIZE = 'receiver/INITIALIZE';
const TOGGLE = 'receiver/TOGGLE';

export const initReceiver = createAction(INITIALIZE)<number>();
export const toggleReceiver = createAction(TOGGLE)<number>();

const actions = { initReceiver, toggleReceiver };
type TAction = ActionType<typeof actions>;

type TState = {
  userId: number;
};

// 0 is just a dummy value for initialization.
const initialState: TState = {
  userId: 0,
};

export const receiver = createReducer<TState, TAction>(initialState, {
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
});
