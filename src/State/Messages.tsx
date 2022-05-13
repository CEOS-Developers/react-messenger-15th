import { atom } from "recoil";

export interface IMessagesTypes {
    userId: number;
    roomID: number;
    messageText: string;
}

export const setMessagesState = atom<string>({
    key: 'message',
    default: '',
});

  // 업데이트 시킬 Todos atom 배열
export const messagesState = atom<IMessagesTypes[]>({
    key: 'message',
    default: [
    {
        userId: 0,
        roomID: 1,
        messageText: "Hey buddy What are you doing now",
    },
    {
        userId: 0,
        roomID: 2,
        messageText: "Hey buddy What are you doing now",
    }, 
    {
        userId: 2,
        roomID: 2,
        messageText: "Hey buddy What are you doing now",
    },
    {
        userId: 0,
        roomID: 3,
        messageText: "Hey buddy What are you doing now",
    },
    {
        userId: 3,
        roomID: 3,
        messageText: "Hey buddy What are you doing now",
    }
    ]
});