export interface IChat {
  userId: number;
  msg: string;
  unixTime: number;
}

export interface IChats extends Array<IChat> {}

export interface IFriend {
  userId: number;
  userName: string;
}
