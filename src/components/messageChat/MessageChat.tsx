import styled from "styled-components";
import MessageBallon from "./MessageBallon";
import { useState } from "react";

const MessageChat = () => {
  const [messageList, setMessageList] = useState([
    {
      id: 1,
      text: "new Message!",
      user: "krkorklo",
      date: "11:30",
    },
    { id: 2, text: "message", user: "jhj", date: "11:40" },
    { id: 3, text: "message", user: "krkorklo", date: "11:41" },
    { id: 4, text: "message", user: "jhj", date: "11:50" },
    { id: 5, text: "message", user: "jhj", date: "11:53" },
    { id: 6, text: "message", user: "krkorklo", date: "12:30" },
    { id: 7, text: "message", user: "jhj", date: "12:32" },
    { id: 8, text: "message", user: "jhj", date: "12:32" },
  ]);

  return (
    <Wrapper>
      {messageList.map((msg) => (
        <MessageBallonContainer isMine={msg.user === "krkorklo"}>
          <MessageBallon key={msg.id} message={msg} />
        </MessageBallonContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 430px;
  overflow: auto;
  padding: 12px 10px 0 12px;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }
`;
const MessageBallonContainer = styled.section<{ isMine: boolean }>`
  display: flex;
  justify-content: ${({ isMine }) => isMine && "flex-end"};
`;

export default MessageChat;
