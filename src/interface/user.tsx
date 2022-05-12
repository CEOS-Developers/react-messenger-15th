export interface IUserType {
  id: number;
  name: string;
  statusMessage: string;
}

export interface IUserState {
  users: IUserType[];
  mainUser: IUserType;
}
