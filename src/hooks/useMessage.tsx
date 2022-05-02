import { MessageContext } from "contexts/MessageContext";
import { IMessageType } from "interface";
import { useContext } from "react";

const useMessage = () => {
  const { messages, dispatch } = useContext(MessageContext);

  const addMessage = (message: IMessageType): void => {
    dispatch({
      type: "ADD_MESSAGE",
      message,
    });
  };

  return { messages, addMessage };
};

export default useMessage;
