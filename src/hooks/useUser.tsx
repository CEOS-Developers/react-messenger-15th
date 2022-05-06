import { useRecoilState } from "recoil";
import { userState } from "recoil/recoil";

const useUser = () => {
  const [userStore, setUserStore] = useRecoilState(userState);

  // user 토글 함수
  const toggleUser = (): void => {
    const nextIdx =
      (userStore.users.findIndex(
        (user) => user.id === userStore.currentUser.id,
      ) +
        1) %
      userStore.users.length;
    setUserStore({ ...userStore, currentUser: userStore.users[nextIdx] });
  };

  return { currentUser: userStore.currentUser, toggleUser };
};

export default useUser;
