import styled from "styled-components";
import MessageBallon from "./MessageBallon";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { chatRoomState } from "recoil/recoil";

const MessageChat = () => {
  const messageWrapperRef = useRef<HTMLElement>(null);
  const { message, currentUser } = useRecoilValue(chatRoomState);

  const _scrollToBottom = (): void => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    _scrollToBottom();
  }, [message]);

  return (
    <Wrapper ref={messageWrapperRef}>
      {message.map((msg) => (
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
  padding: 1rem 0.8rem 0 0.8rem;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;
const MessageBallonContainer = styled.section<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => isUser && "flex-end"};
`;

export default MessageChat;
