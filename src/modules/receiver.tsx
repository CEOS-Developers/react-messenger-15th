import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import { bindActionCreators } from 'redux';

import meData from '../assets/json/meData.json';

const INITIALIZE = 'receiver/INITIALIZE';
const TOGGLE = 'receiver/TOGGLE';

export function initReceiver(partnerUserId: number) {
  return { type: INITIALIZE, partnerUserId };
}

export function toggleReceiver(partnerUserId: number) {
  return { type: TOGGLE, partnerUserId };
}

const initialState = {
  userId: 0,
};

export function receiver(state = initialState, action: any) {
  // console.log('state: ' + state.userId);
  // console.log('action type: ' + action.type);
  // console.log('action partnerUserId: ' + action.partnerUserId);
  switch (action.type) {
    case INITIALIZE:
      console.log('init receiver!');
      return {
        ...state,
        userId: action.partnerUserId,
      };
    case TOGGLE:
      console.log('toggle receiver!');
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

// type TState = {
//   receiverUserId: number;
// };

// type TAction =
//   | { type: 'INITIALIZE'; partnerUserId: number }
//   | { type: 'TOGGLE'; partnerUserId: number };

// type TDispatch = Dispatch<TAction>;

// const ReceiverUserIdStateContext = createContext<TState | null>(null);
// const ReceiverUserIdDispatchContext = createContext<TDispatch | null>(null);

// function reducer(state: TState, action: TAction): TState {
//   switch (action.type) {
//     case 'INITIALIZE':
//       return {
//         ...state,
//         receiverUserId: action.partnerUserId,
//       };
//     case 'TOGGLE':
//       if (state.receiverUserId === meData.userId) {
//         return {
//           ...state,
//           receiverUserId: action.partnerUserId,
//         };
//       } else {
//         return {
//           ...state,
//           receiverUserId: meData.userId,
//         };
//       }
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// export function ReceiverUserIdProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [state, dispatch] = useReducer(reducer, { receiverUserId: 0 });
//   // 0 is a dummy value for initialization

//   return (
//     <ReceiverUserIdStateContext.Provider value={state}>
//       <ReceiverUserIdDispatchContext.Provider value={dispatch}>
//         {children}
//       </ReceiverUserIdDispatchContext.Provider>
//     </ReceiverUserIdStateContext.Provider>
//   );
// }

// export function useReceiverUserIdState() {
//   const state = useContext(ReceiverUserIdStateContext);
//   if (!state) throw new Error('Cannot find the Provider');
//   return state;
// }

// export function useReceiverUserIdDispatch() {
//   const dispatch = useContext(ReceiverUserIdDispatchContext);
//   if (!dispatch) throw new Error('Cannot find the Provider');
//   return dispatch;
// }
