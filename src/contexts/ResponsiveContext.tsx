import { useReducer, createContext } from "react";
import { IResponsiveSizeAction, IResponsiveSizeState } from "interface";

// 전역 데이터의 초기값
const initialState: IResponsiveSizeState = {
  isMobile: false,
  dispatch: () => {},
};

const ResponsiveSizeContext = createContext<IResponsiveSizeState>(initialState);

const reducer = (
  state: IResponsiveSizeState,
  action: IResponsiveSizeAction,
): IResponsiveSizeState => {
  switch (action.type) {
    case "RESIZE":
      return {
        ...state,
        isMobile: action.isMobile,
      };
    default:
      throw new Error();
  }
};

interface IContextProps {
  children: JSX.Element;
}

const ResponsiveSizeProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ResponsiveSizeContext.Provider
      value={{
        isMobile: state.isMobile,
        dispatch,
      }}
    >
      {children}
    </ResponsiveSizeContext.Provider>
  );
};

export { ResponsiveSizeContext, ResponsiveSizeProvider };
