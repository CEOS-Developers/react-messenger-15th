export interface ChatType {
    userId: string;
    content: string;
    date: string;
    like: boolean;
    chatId: string;
}
export interface ChatDataType {
    roomId: string;
    user: {
        'userId:': string;
    }[];
    chat: ChatType[];
}

export interface UserType {
    userId: string;
    userName: string;
    profileImage: string;
    statusMessage: string;
}
