import { messageState, userState } from "recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";

const useMessage = () => {
  const [messages, setMessages] = useRecoilState(messageState);
  const user = useRecoilValue(userState);

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

  return { messages, addMessage };
};

export default useMessage;
