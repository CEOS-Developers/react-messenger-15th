import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import InputForm from './InputForm';
import ChatRoomBody from './ChatRoomBody';
import ChatRoomHeader from './ChatRoomHeader';

const ChatRoomScreen = () => {
  const [chatList, setChatList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('user0');

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [chatList]);

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <BodyWrapper ref={scrollRef}>
        <ChatRoomBody chatList={chatList} setChatList={setChatList} />
      </BodyWrapper>
      <InputForm
        currentUserId={currentUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </Wrapper>
  );
};

export default ChatRoomScreen;

const Wrapper = styled.section`
  width: 350px;
  height: 700px;

  border: 1px solid #e2e2e2;

  @media screen and (min-width: 768px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

const BodyWrapper = styled.section`
  overflow: auto;
  width: 100%;
  height: 75%;

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
