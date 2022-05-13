import meData from '../assets/json/meData.json';

const INITIALIZE = 'receiver/INITIALIZE' as const;
const TOGGLE = 'receiver/TOGGLE' as const;

export const initReceiver = (partnerUserId: number) => ({
  type: INITIALIZE,
  payload: partnerUserId,
});

export const toggleReceiver = (partnerUserId: number) => ({
  type: TOGGLE,
  payload: partnerUserId,
});

type TAction =
  | ReturnType<typeof initReceiver>
  | ReturnType<typeof toggleReceiver>;

type TState = {
  userId: number;
};

// 0 is just a dummy value for initialization.
const initialState: TState = {
  userId: 0,
};

export function receiver(
  state: TState = initialState,
  action: TAction
): TState {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        userId: action.payload,
      };
    case TOGGLE:
      if (state.userId === meData.userId) {
        return {
          ...state,
          userId: action.payload,
        };
      } else {
        return {
          ...state,
          userId: meData.userId,
        };
      }
    default:
      return state;
  }
}
