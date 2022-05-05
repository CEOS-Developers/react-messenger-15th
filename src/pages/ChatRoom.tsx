import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChatRoomHeader } from '../components/chatroom/ChatRoomHeader';
import { ChatRoomMain } from '../components/chatroom/ChatRoomMain';
import { ChatRoomForm } from '../components/chatroom/ChatRoomForm';
import chats from '../data/chats.json';

export function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();
  const [receiverUserId, setReceiverUserId] = useState(tmpPartnerUserId);
  const ChatsWithPartner = chats.filter(
    (user) => parseInt(user.userId) === tmpPartnerUserId
  )[0];
  const [chatList, setChatList] = useState(ChatsWithPartner);

  return (
    <ChatRoomBlock>
      <ChatRoomHeader
        partnerUserId={tmpPartnerUserId}
        receiverUserId={receiverUserId}
        setReceiverUserId={setReceiverUserId}
      />
      <ChatRoomMain partnerUserId={tmpPartnerUserId} chatList={chatList} />
      <ChatRoomForm
        partnerUserId={tmpPartnerUserId}
        receiverUserId={receiverUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </ChatRoomBlock>
  );
}

const ChatRoomBlock = styled.div`
  // Desktop
  @media screen and (min-width: 768px) {
    margin-top: 30%;

    width: 350px;
    height: 700px;

    border-radius: 20px;
    box-shadow: 0 0 25px rgba(105, 85, 85, 0.5);
  }

  // Mobile
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;
