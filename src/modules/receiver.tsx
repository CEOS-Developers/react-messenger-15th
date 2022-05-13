import meData from '../assets/json/meData.json';

const INITIALIZE = 'receiver/INITIALIZE' as const;
const TOGGLE = 'receiver/TOGGLE' as const;

export const initReceiver = (partnerUserId: number) => ({
  type: INITIALIZE,
  partnerUserId,
});

export const toggleReceiver = (partnerUserId: number) => ({
  type: TOGGLE,
  partnerUserId,
});

const initialState = {
  userId: 0,
};

export function receiver(state = initialState, action: any) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        userId: action.partnerUserId,
      };
    case TOGGLE:
      if (state.userId === meData.userId) {
        return {
          ...state,
          userId: action.partnerUserId,
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
