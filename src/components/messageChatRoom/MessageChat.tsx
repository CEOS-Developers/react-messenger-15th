import styled from "styled-components";
import MessageBallon from "./MessageBallon";
import useMessage from "hooks/useMessage";
import useUser from "hooks/useUser";
import { useEffect, useRef } from "react";

const MessageChat = () => {
  const messageWrapperRef = useRef<HTMLElement>(null);
  const { messages } = useMessage();
  const { currentUser } = useUser();

  const _scrollToBottom = (): void => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    _scrollToBottom();
  }, [messages]);

  return (
    <Wrapper ref={messageWrapperRef}>
      {messages.map((msg) => (
        <MessageBallonContainer
          key={msg.id}
          isUser={msg.user.name === currentUser.name}
        >
          <MessageBallon key={msg.id} message={msg} />
        </MessageBallonContainer>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 67%;
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
const MessageBallonContainer = styled.section<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser && "flex-end"};
`;

export default MessageChat;
