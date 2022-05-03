import { UserContext } from "contexts/UserContext";
import { useContext } from "react";

const useUser = () => {
  const { users, currentUser, dispatch } = useContext(UserContext);

  // user 토글 함수
  const toggleUser = (): void => {
    const currentIdx = users.findIndex((user) => user.id === currentUser.id);
    dispatch({
      type: "TOGGLE_USER",
      currentIdx,
    });
  };

  return { currentUser, toggleUser };
};

export default useUser;
