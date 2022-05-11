import { chatRoomState, messageState, userState } from "recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";

const useChatRoom = () => {
  const messageList = useRecoilValue(messageState);
  const userStore = useRecoilValue(userState);
  const [chatState, setChatState] = useRecoilState(chatRoomState);

  // 메시지 추가
  const addMessage = (text: string): void => {
    const curTime =
      String(new Date().getHours()).padStart(2, "0") +
      ":" +
      String(new Date().getMinutes()).padStart(2, "0");
    const messageObj = {
      id: new Date().valueOf(),
      user: chatState.currentUser,
      time: curTime,
      text: text,
    };
    setChatState({ ...chatState, message: [...chatState.message, messageObj] });
  };

  // user 토글 함수
  const toggleUser = (id: number): void => {
    let toggleIdx = 0;
    if (id <= 1000 && chatState.currentUser.id === userStore.mainUser.id) {
      toggleIdx = userStore.users.findIndex((user) => user.id === id);
    } else if (id > 1000) {
      // 단체 chat의 경우
      let users =
        messageList[messageList.findIndex((msg) => msg.id === id)].user;
      toggleIdx = users.findIndex(
        (user) => user.id === chatState.currentUser.id
      );
      if (toggleIdx === -1) {
        toggleIdx = userStore.users.findIndex(
          (user) => user.id === users[0].id
        );
      } else if (toggleIdx === users.length - 1) {
        toggleIdx = 0;
      } else {
        toggleIdx = userStore.users.findIndex(
          (user) => user.id === users[toggleIdx + 1].id
        );
      }
    }
    setChatState({ ...chatState, currentUser: userStore.users[toggleIdx] });
  };

  // 메시지 세팅
  const handleChatRoom = (id: number): void => {
    const toggleIndex = messageList.findIndex((msg) => msg.id === id);
    setChatState({
      currentUser: userStore.mainUser,
      message: messageList[toggleIndex].messages,
    });
  };

  return { addMessage, handleChatRoom, toggleUser };
};

export default useChatRoom;
