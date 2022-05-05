export interface Chat {
  userId: number;
  msg: string;
  unixTime: number;
}

export interface Chats extends Chat {
  userId: number;
  chats: Chat[];
}
