import { atom } from "recoil";

export interface IUserTypes {
    userId: number;
    roomID: number;
    messageText: string;
}

export const setUserState = atom<string>({
    key: 'setUserState',
    default: '',
});

  // 업데이트 시킬 Todos atom 배열
export const usersState = atom<IUserTypes[]>({
    key: 'users',
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
        userId: 0,
        roomID: 2,
        messageText: "Hey buddy What are you doing now",
    },
    {
        userId: 0,
        roomID: 3,
        messageText: "Hey buddy What are you doing now",
    },
    {
        userId: 0,
        roomID: 3,
        messageText: "Hey buddy What are you doing now",
    }
    ]
});