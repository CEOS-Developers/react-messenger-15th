import styled from 'styled-components';
import { useState } from 'react';
import InputForm from './InputForm';
import ChatRoomBody from './ChatRoomBody';
import ChatRoomHeader from './ChatRoomHeader';
import { IChatRoomBodyProps, IChatRoomHeaderProps } from './Interface';

const ChatRoomScreen = ({
  chatList,
  setChatList,
  currentUserId,
  setCurrentUserId,
}: IChatRoomBodyProps & IChatRoomHeaderProps) => {
  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />

      <ChatRoomBody chatList={chatList} setChatList={setChatList} />

      <InputForm
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
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
