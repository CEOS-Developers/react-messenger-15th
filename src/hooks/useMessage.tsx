import { messageState, userState } from "recoil/recoil";
import { useRecoilValue } from "recoil";
import { useState } from "react";

const useMessage = () => {
  const messageInfo = useRecoilValue(messageState);
  const user = useRecoilValue(userState);
  const [messages, setMessages] = useState(messageInfo.messageList[0].messages);

  // 메시지 추가
  const addMessage = (text: string): void => {
    const curTime =
      String(new Date().getHours()).padStart(2, "0") +
      ":" +
      String(new Date().getMinutes()).padStart(2, "0");
    const messageObj = {
      id: new Date().valueOf(),
      user: user.currentUser,
      time: curTime,
      text: text,
    };
    setMessages([...messages, messageObj]);
  };

  const toggleChat = (idx: number): void => {
    const toggleIndex = messageInfo.messageList.findIndex(
      (msg) => msg.user.id === idx,
    );
    setMessages(messageInfo.messageList[toggleIndex].messages);
  };

  return { messages, addMessage, toggleChat };
};

export default useMessage;
