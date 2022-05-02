import { UserContext } from "contexts/UserContext";
import { useContext } from "react";

const useUser = () => {
  const { currentUser, dispatch } = useContext(UserContext);

  const toggleUser = (name: string): void => {
    dispatch({
      type: "TOGGLE_USER",
      name,
    });
  };

  return { currentUser, toggleUser };
};

export default useUser;
