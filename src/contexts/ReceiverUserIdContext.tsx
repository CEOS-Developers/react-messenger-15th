import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import me from '../data/me.json';

type TState = {
  receiverUserId: number;
};

type TAction = { type: 'TOGGLE'; partnerUserId: number };

type TDispatch = Dispatch<TAction>;

const ReceiverUserIdContext = createContext<TState | null>(null);
const ReceiverUserIdDispatchContext = createContext<TDispatch | null>(null);

function reducer(state: TState, action: TAction): TState {
  switch (action.type) {
    case 'TOGGLE':
      if (state.receiverUserId == me.userId)
        return {
          ...state,
          receiverUserId: action.partnerUserId,
        };
      else
        return {
          ...state,
          receiverUserId: me.userId,
        };
    default:
      throw new Error('Unhandled action');
  }
}

export function ReceiverUserIdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, { receiverUserId: 1 });

  return (
    <ReceiverUserIdContext.Provider value={state}>
      <ReceiverUserIdDispatchContext.Provider value={dispatch}>
        {children}
      </ReceiverUserIdDispatchContext.Provider>
    </ReceiverUserIdContext.Provider>
  );
}

export function useReceiverUserIdState() {
  const state = useContext(ReceiverUserIdContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useReceiverUserIdDispatch() {
  const dispatch = useContext(ReceiverUserIdDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
