export interface Chat {
  userId: string;
  msg: string;
  timestamp: number;
}

export interface Chats extends Chat {
  userId: string;
  chats: Chat[];
}
