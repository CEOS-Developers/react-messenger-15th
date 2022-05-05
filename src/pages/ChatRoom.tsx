import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChatRoomHeader } from '../components/chatroom/ChatRoomHeader';
import { ChatRoomMain } from '../components/chatroom/ChatRoomMain';
import { ChatRoomForm } from '../components/chatroom/ChatRoomForm';

import chats from '../assets/chats.json';

export function ChatRoom() {
  const tmpPartnerUserId = 'user1'; // const { partnerUserId } = useParams();
  const [partnerUserId, setPartnerUserId] = useState(tmpPartnerUserId);
  const [receiverUserId, setReceiverUserId] = useState(tmpPartnerUserId);

  const filterChats = chats.filter((user) => user.userId === partnerUserId)[0];
  const [chatList, setChatList] = useState(filterChats);

  // const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  // useEffect(() => {
  //   scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  // }, [chatList]);
  // scrollRef.current.scrollHeight
  // https://kyounghwan01.github.io/blog/TS/object-null/#%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5

  return (
    <ChatRoomBlock>
      <ChatRoomHeader
        partnerUserId={partnerUserId}
        receiverUserId={receiverUserId}
        setReceiverUserId={setReceiverUserId}
      />
      {/* <ChatRoomMain ref={scrollRef} chatList={chatList} /> */}
      {/* <ChatRoomMain partnerUserId={partnerUserId} chatList={chatList} />
      <ChatRoomForm
        partnerUserId={partnerUserId}
        chatList={chatList}
        setChatList={setChatList}
      /> */}
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
