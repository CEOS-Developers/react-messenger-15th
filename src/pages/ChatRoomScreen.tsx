import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import InputForm from '../components/chatroom/InputForm';
import ChatRoomBody from '../components/chatroom/ChatRoomBody';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';

import { IChat } from '../components/Interfaces';
import data from '../assets/data.json';

const ChatRoomScreen = () => {
  const { userId } = useParams();
  const [chatObj] = data.filter((room) => room.partnerId === userId);
  const [currentUserId, setCurrentUserId] = useState<string>('user0');
  const [chatList, setChatList] = useState<IChat[]>(chatObj.chats);

  return (
    <Wrapper>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />

      <ChatRoomBody chatList={chatList} />

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
