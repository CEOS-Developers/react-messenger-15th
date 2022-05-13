import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import { IChats, IChat } from '../types/index';

import chatsData from '../assets/json/chatsData.json';

const INITIALIZE = 'chats/INITIALIZE';
const CONCAT = 'chats/CONCAT';

export function initChats(partnerUserId: any) {
  return { type: INITIALIZE, partnerUserId };
}

export function concatNewChat(newChat: any) {
  return { type: CONCAT, newChat };
}

const initialState = {
  data: [
    {
      userId: 0,
      msg: 'Dummy',
      unixTime: 0,
    },
  ],
};

export function chats(state = initialState, action: any): any {
  console.log('state.data: ');
  console.log(state.data);
  // console.log('action type: ' + action.type);
  // console.log('action partnerUserId: ' + action.partnerUserId);
  switch (action.type) {
    case INITIALIZE:
      console.log('init chats');
      const chatsWithPartner = chatsData.filter(
        (friend) => friend.userId === action.partnerUserId
      )[0].data;
      return {
        ...state,
        data: chatsWithPartner,
      };
    case CONCAT:
      console.log('concat new chat!');
      return {
        ...state,
        data: state.data.concat(action.newChat),
      };
    default:
      return state;
  }
}

// type TState = {
//   chats: IChats;
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
//         chats: chatsWithPartner,
//       };
//     case 'CONCAT':
//       return {
//         ...state,
//         chats: state.chats.concat(action.newChat),
//       };
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// export function ChatListProvider({ children }: { children: React.ReactNode }) {
//   const [state, dispatch] = useReducer(reducer, {
//     chats: [
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
