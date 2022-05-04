export interface chats {
  userId: string;
  chats: {
    userId: string;
    msg: string;
    timestamp: number;
  }[];
}
