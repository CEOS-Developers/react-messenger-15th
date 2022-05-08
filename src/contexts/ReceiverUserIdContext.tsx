import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import me from '../data/me.json';

type TState = {
  receiverUserId: number;
};

type TAction =
  | { type: 'INITIALIZE'; partnerUserId: number }
  | { type: 'TOGGLE'; partnerUserId: number };

type TDispatch = Dispatch<TAction>;

const ReceiverUserIdStateContext = createContext<TState | null>(null);
const ReceiverUserIdDispatchContext = createContext<TDispatch | null>(null);

function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        receiverUserId: action.partnerUserId,
      };
    case 'TOGGLE':
      if (state.receiverUserId === me.userId) {
        return {
          ...state,
          receiverUserId: action.partnerUserId,
        };
      } else {
        return {
          ...state,
          receiverUserId: me.userId,
        };
      }
    default:
      throw new Error('Unhandled action');
  }
}

export function ReceiverUserIdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, { receiverUserId: 0 });
  // 0 is a dummy value for initialization

  return (
    <ReceiverUserIdStateContext.Provider value={state}>
      <ReceiverUserIdDispatchContext.Provider value={dispatch}>
        {children}
      </ReceiverUserIdDispatchContext.Provider>
    </ReceiverUserIdStateContext.Provider>
  );
}

export function useReceiverUserIdState() {
  const state = useContext(ReceiverUserIdStateContext);
  if (!state) throw new Error('Cannot find the Provider');
  return state;
}

export function useReceiverUserIdDispatch() {
  const dispatch = useContext(ReceiverUserIdDispatchContext);
  if (!dispatch) throw new Error('Cannot find the Provider');
  return dispatch;
}
