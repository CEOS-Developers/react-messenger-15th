import { useReducer, createContext } from "react";
import user from "data/user.json";
import { IUserState, IUserAction } from "interface";

// 전역 데이터의 초기값
const initialState: IUserState = {
  currentUser: user[0],
  dispatch: () => {},
};

const UserContext = createContext<IUserState>(initialState);

const reducer = (state: IUserState, action: IUserAction): IUserState => {
  switch (action.type) {
    case "TOGGLE_USER":
      return {
        ...state,
        currentUser: user.filter(({ name }) => name !== action.name)[0],
      };
    default:
      throw new Error();
  }
};

interface IContextProps {
  children: JSX.Element;
}

const UserProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
