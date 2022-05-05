export interface Chat {
  userId: string;
  msg: string;
  unixTime: number;
}

export interface Chats extends Chat {
  userId: string;
  chats: Chat[];
}
