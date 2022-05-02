import { MessageContext } from "contexts/MessageContext";
import { useContext } from "react";
import useUser from "./useUser";

const useMessage = () => {
  const { messages, dispatch } = useContext(MessageContext);
  const { currentUser } = useUser();

  // 메시지 추가
  const addMessage = (text: string): void => {
    const messageObj = {
      id: new Date().valueOf(),
      user: currentUser,
      time: new Date().getHours() + ":" + new Date().getMinutes(),
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
