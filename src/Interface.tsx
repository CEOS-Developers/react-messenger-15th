export interface ChatType {
    userId: number;
    content: string;
    date: string;
    like: boolean;
    chatId: number;
}
export interface ChatDataType {
    roomId: number;
    user: {
        userId: number;
    }[];
    chat: ChatType[];
}

export interface UserType {
    userId: number;
    userName: string;
    profileImage: string;
    statusMessage: string;
}
