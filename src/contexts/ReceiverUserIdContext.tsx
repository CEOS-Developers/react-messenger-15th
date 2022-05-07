import React, { useReducer, createContext, useContext, Dispatch } from 'react';
import me from '../data/me.json';

type Color = 'red' | 'orange' | 'yellow';

// 상태를 위한 타입
type TState = number;

// 모든 액션들을 위한 타입
type TAction = { type: 'TOGGLE' };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type TDispatch = Dispatch<TAction>;

// Context 만들기
const SampleStateContext = createContext<TState | null>(null);
const SampleDispatchContext = createContext<TDispatch | null>(null);

// 리듀서
function reducer(state: TState, action: TAction): any {
  // switch (action.type) {
  //   case 'SET_COUNT':
  //     return {
  //       ...state,
  //       count: action.count, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
  //     };
  //   case 'SET_TEXT':
  //     return {
  //       ...state,
  //       text: action.text, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
  //     };
  //   case 'SET_COLOR':
  //     return {
  //       ...state,
  //       color: action.color, // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
  //     };
  //   case 'TOGGLE_GOOD':
  //     return {
  //       ...state,
  //       isGood: !state.isGood,
  //     };
  //   default:
  //     throw new Error('Unhandled action');
  // }
}

// SampleProvider 에서 useReduer를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function ReceiverUserIdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, 1);

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}

// const partnerUserId = 1;

// type TState = number;

// type TAction = { type: 'TOGGLE' };

// type TDispatch = Dispatch<TAction>;

// const ReceiverUserIdStateContext = createContext<TState | null>(null);
// const ReceiverUserIdDispatchContext = createContext<TDispatch | null>(null);

// function receiverUserIdReducer(state: TState, action: TAction): TState {
//   switch (action.type) {
//     case 'TOGGLE':
//       let nextReceiverUserId;
//       if (state === me.userId) nextReceiverUserId = partnerUserId;
//       else nextReceiverUserId = me.userId;
//       return nextReceiverUserId;
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// export function ReceiverUserIdProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [state, dispatch] = useReducer(receiverUserIdReducer, 1);
//   console.log('state: ' + state);
//   return (
//     <ReceiverUserIdStateContext.Provider value={state}>
//       <ReceiverUserIdDispatchContext.Provider value={dispatch}>
//         {children}
//       </ReceiverUserIdDispatchContext.Provider>
//     </ReceiverUserIdStateContext.Provider>
//   );
// }

// export function useReceiverUserIdState() {
//   const context = useContext(ReceiverUserIdStateContext);
//   if (!context) {
//     throw new Error('Cannot find ReceiverUserIdProvider');
//   }
//   return;
// }

// export function useReceiverUserIdDispatch() {
//   const context = useContext(ReceiverUserIdDispatchContext);
//   if (!context) {
//     throw new Error('Cannot find ReceiverUserIdProvider');
//   }
//   return context;
// }
