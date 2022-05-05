import styled from 'styled-components';
import { useState } from 'react';
import InputForm from './InputForm';
import ChatRoomBody from './ChatRoomBody';
import ChatRoomHeader from './ChatRoomHeader';

const ChatRoomScreen = () => {
  const [chatList, setChatList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('user0');

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      <ChatRoomBody chatList={chatList} setChatList={setChatList} />
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
  width: 100%;
  height: 100%;
`;
