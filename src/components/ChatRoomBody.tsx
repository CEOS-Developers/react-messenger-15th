import styled from 'styled-components';
import Chat from './Chat';
import db from '../db/db.json';
import { useRef, useEffect } from 'react';

const ChatRoomBody = ({ chatList, setChatList }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [chatList]);

  return (
    <>
      <BodyWrapper ref={scrollRef}>
        {db?.data.map(({ userId, message, msgId }) => (
          <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
        ))}
        {chatList?.map(({ userId, message, msgId }) => (
          <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
        ))}
      </BodyWrapper>
    </>
  );
};
export default ChatRoomBody;

const BodyWrapper = styled.section`
  overflow: auto;
  width: 100%;
  height: 80%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    background-clip: padding-box;
    border-radius: 20px;
    border: 8px solid transparent;
  }
`;
