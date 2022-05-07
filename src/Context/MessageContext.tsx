import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type Message = {
        userID: number;
        text: string;
    };

type Action =
    | { type: 'ADD' };

type MessageDispatch = Dispatch<Action>;

const MessageStateContext = createContext<Message[]>([{
    userID : 0,
    text: 'Dummy'
}]);
const MessageDispatchContext = createContext<MessageDispatch | null >(null);

const initialMessages = [
    {
        userID : 0,
        text: 'Sly bunny'
    },
    {
        userID : 1,
        text: 'Dumb fox'
    },
    {
        userID : 0,
        text: 'Come on'
    },
    {
        userID : 0,
        text: 'you know I love you'
    }
];

function messageReducer(state: Message[], action: Action) {
    switch (action.type) {
        case "ADD":
            return state.concat({ 
                    userID : 0, 
                    text: 'action.payload' });
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function MessageProvider({ children } : { children: React.ReactNode } ) {
    const [state, dispatch] = useReducer(messageReducer, initialMessages);
    return ( 
    <MessageStateContext.Provider value={state}>
        <MessageDispatchContext.Provider value={dispatch}>
            {children}
        </MessageDispatchContext.Provider>;
    </MessageStateContext.Provider>);
}

export function useMessageState() {
        return useContext(MessageStateContext);
    }
    
export function useMessageDispatch() {
        return useContext(MessageDispatchContext);
    }