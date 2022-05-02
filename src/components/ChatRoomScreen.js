import { useState } from 'react';
import InputForm from './InputForm';
import ChatRoomBody from './ChatRoomBody';
import styled from 'styled-components';

const ChatRoomScreen = () => {
  const [chatList, setChatList] = useState([]);
  const userId = 'user1';
  const [currentUserId, setCurrentUserId] = useState(userId);

  return (
    <Wrapper>
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
