import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import chats from '../data/chats.json';
import { IChats, IChat } from '../types/index';

type TState = {
  chatList: IChats;
};

type TAction =
  | { type: 'INITIALIZE'; partnerUserId: number }
  | { type: 'CONCAT'; newChat: IChat };

type TDispatch = Dispatch<TAction>;

const ChatListContext = createContext<TState | null>(null);
const ChatListDispatchContext = createContext<TDispatch | null>(null);

/*
 ** 질문
 ** reducer 함수의 리턴 type은 어떻게 작성해야 할까요?
 ** TState로 작성하면 오류가 발생합니다.
 */

function reducer(state: TState, action: TAction): any {
  switch (action.type) {
    case 'INITIALIZE':
      const chatsWithPartner = chats.filter(
        (user) => user.userId === action.partnerUserId
      )[0].chats;
      return {
        ...state,
        chatList: chatsWithPartner,
      };
    case 'CONCAT':
      return {
        ...state,
        chatList: state.chatList.concat(action.newChat),
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function ChatListProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, [
    {
      userId: 0,
      msg: 'dummy',
      unixTime: 0,
    },
  ]);

  return (
    <ChatListContext.Provider value={state}>
      <ChatListDispatchContext.Provider value={dispatch}>
        {children}
      </ChatListDispatchContext.Provider>
    </ChatListContext.Provider>
  );
}

export function useChatListState() {
  const state = useContext(ChatListContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useChatListDispatch() {
  const dispatch = useContext(ChatListDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
