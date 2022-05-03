import { MessageContext } from "contexts/MessageContext";
import { useContext } from "react";
import useUser from "./useUser";

const useMessage = () => {
  const { messages, dispatch } = useContext(MessageContext);
  const { currentUser } = useUser();

  // 메시지 추가
  const addMessage = (text: string): void => {
    const curTime =
      String(new Date().getHours()).padStart(2, "0") +
      ":" +
      String(new Date().getMinutes()).padStart(2, "0");
    const messageObj = {
      id: new Date().valueOf(),
      user: currentUser,
      time: curTime,
      text,
    };
    dispatch({
      type: "ADD_MESSAGE",
      message: messageObj,
    });
  };

  return { messages, addMessage };
};

export default useMessage;
