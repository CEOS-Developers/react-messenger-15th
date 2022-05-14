export interface IUser {
  userId : number,
  userName:string,
  profileImg:string,
  introduce : string,
  profileMusic : string,
  isMe : boolean,
  last:string
}

export interface IMessage {
  roomId : number,
  user : {
    userName:string
  }[],
  msgs:{
    userName:string,
    contents:string,
    date:string
  }[],
}

export interface IMsgs {
  userName:string,
  contents:string,
  date:string,
  children?: React.ReactNode
}