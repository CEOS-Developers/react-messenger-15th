import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import chats from '../assets/json/chats.json';
import { IChats, IChat } from '../types/index';

const INITIALIZE = 'chatList/INITIALIZE';
const CONCAT = 'chatList/CONCAT';

export function initializeChatList(partnerUserId: any) {
  return { type: INITIALIZE, partnerUserId };
}

export function concatChatList(newChat: any) {
  return { type: CONCAT, newChat };
}

const initialState = {
  chatList: [
    {
      userId: 0,
      msg: 'Dummy',
      unixTime: 0,
    },
  ],
};

export function chatList(state = initialState, action: any): any {
  console.log('state: ' + state.chatList);
  console.log('action type: ' + action.type);
  console.log('action partnerUserId: ' + action.partnerUserId);
  switch (action.type) {
    case INITIALIZE:
      console.log('init!');
      const chatsWithPartner = chats.filter(
        (user) => user.userId === action.partnerUserId
      )[0].data;
      return {
        ...state,
        chatList: chatsWithPartner,
      };
    case CONCAT:
      console.log('concat!');
      return {
        ...state,
        chatList: state.chatList.concat(action.newChat),
      };
    default:
      return state;
  }
}

// type TState = {
//   chatList: IChats;
// };

// type TAction =
//   | { type: 'INITIALIZE'; partnerUserId: number }
//   | { type: 'CONCAT'; newChat: IChat };

// type TDispatch = Dispatch<TAction>;

// const ChatListStateContext = createContext<TState | null>(null);
// const ChatListDispatchContext = createContext<TDispatch | null>(null);

// function reducer(state: TState, action: TAction): TState {
//   switch (action.type) {
//     case 'INITIALIZE':
//       const chatsWithPartner = chats.filter(
//         (user) => user.userId === action.partnerUserId
//       )[0].data;
//       return {
//         ...state,
//         chatList: chatsWithPartner,
//       };
//     case 'CONCAT':
//       return {
//         ...state,
//         chatList: state.chatList.concat(action.newChat),
//       };
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// export function ChatListProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer(reducer, {
//     chatList: [
//       {
//         userId: 0,
//         msg: 'Dummy',
//         unixTime: 0,
//       },
//     ],
//   });

//   return (
//     <ChatListStateContext.Provider value={state}>
//       <ChatListDispatchContext.Provider value={dispatch}>
//         {children}
//       </ChatListDispatchContext.Provider>
//     </ChatListStateContext.Provider>
//   );
// }

// export function useChatListState() {
//   const state = useContext(ChatListStateContext);
//   if (!state) throw new Error('Cannot find the Provider');
//   return state;
// }

// export function useChatListDispatch() {
//   const dispatch = useContext(ChatListDispatchContext);
//   if (!dispatch) throw new Error('Cannot find the Provider');
//   return dispatch;
// }
