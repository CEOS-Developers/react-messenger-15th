import styled from "styled-components";
import MessageBallon from "./MessageBallon";
import useMessage from "hooks/useMessage";
import { useEffect, useRef } from "react";

const MessageChat = () => {
  const messageWrapperRef = useRef<HTMLDivElement>(null);
  const { messages } = useMessage();

  const ScrollToBottom = (): void => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    ScrollToBottom();
  }, [messages]);

  return (
    <Wrapper ref={messageWrapperRef}>
      {messages.map((msg) => (
        <MessageBallonContainer key={msg.id} isMine={msg.user === "krkorklo"}>
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
