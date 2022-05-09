import styled from "styled-components";
import MessageBallon from "./MessageBallon";
import { IMessageChat } from "interface";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { chatRoomState } from "recoil/recoil";

const MessageChat = ({ handleChatRoom }: IMessageChat) => {
  const { id } = useParams();
  const messageWrapperRef = useRef<HTMLElement>(null);
  const { message, currentUser } = useRecoilValue(chatRoomState);

  const _scrollToBottom = (): void => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    handleChatRoom(Number(id));
  }, []);
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
