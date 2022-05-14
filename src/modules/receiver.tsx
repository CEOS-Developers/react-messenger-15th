import { createAction, ActionType, createReducer } from 'typesafe-actions';
import meData from '../assets/json/meData.json';

const INITIALIZE = 'receiver/INITIALIZE';
const TOGGLE = 'receiver/TOGGLE';

// export const initReceiver = (partnerUserId: number) => ({
//   type: INITIALIZE,
//   payload: partnerUserId,
// });

export const initReceiver = createAction(INITIALIZE)<number>();

// export const toggleReceiver = (partnerUserId: number) => ({
//   type: TOGGLE,
//   payload: partnerUserId,
// });

export const toggleReceiver = createAction(TOGGLE)<number>();

// type TAction =
//   | ReturnType<typeof initReceiver>
//   | ReturnType<typeof toggleReceiver>;

const actions = { initReceiver, toggleReceiver };
type TAction = ActionType<typeof actions>;

type TState = {
  userId: number;
};

// 0 is just a dummy value for initialization.
const initialState: TState = {
  userId: 0,
};

// export function receiver(
//   state: TState = initialState,
//   action: TAction
// ): TState {
//   switch (action.type) {
//     case INITIALIZE:
//       return {
//         ...state,
//         userId: action.payload,
//       };
//     case TOGGLE:
//       if (state.userId === meData.userId) {
//         return {
//           ...state,
//           userId: action.payload,
//         };
//       } else {
//         return {
//           ...state,
//           userId: meData.userId,
//         };
//       }
//     default:
//       return state;
//   }
// }

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
