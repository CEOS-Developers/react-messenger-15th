import { useReducer, createContext } from "react";
import messages from "data/message.json";
import { IMessageState, IMessageAction } from "interface";

// 전역 데이터의 초기값
const initialState: IMessageState = {
  messages: messages,
  dispatch: () => {},
};

const MessageContext = createContext<IMessageState>(initialState);

const reducer = (
  state: IMessageState,
  action: IMessageAction,
): IMessageState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      throw new Error();
  }
};

interface IContextProps {
  children: JSX.Element;
}

const MessageProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        dispatch,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
