export interface Chat {
  userId: number;
  msg: string;
  unixTime: number;
}

export interface Chats extends Array<Chat> {}
