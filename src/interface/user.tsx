export interface IUserType {
  id: number;
  name: string;
  profileImg: string;
}

export interface IUserState {
  users: IUserType[];
  currentUser: IUserType;
  dispatch: React.Dispatch<IUserAction>;
}

export interface IUserAction {
  type: "TOGGLE_USER";
  currentIdx: number;
}
