import { atom } from "recoil";

export interface IMessagesTypes {
    senderId: string;
    receiverId: string;
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
        senderId: '0',
        receiverId: '1',
        messageText: "Hey buddy What are you doing now",
    },
    {
        senderId: '0',
        receiverId: '2',
        messageText: "Hey buddy What are you doing now",
    }, 
    {
        senderId: '2',
        receiverId: '0',
        messageText: "Hey buddy What are you doing now",
    },
    {
        senderId: '3',
        receiverId: '0',
        messageText: "Hey buddy What are you doing now",
    },
    {
        senderId: '0',
        receiverId: '3',
        messageText: "Hey buddy What are you doing now",
    }
    ]
});