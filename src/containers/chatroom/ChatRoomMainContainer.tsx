import { RootState } from '../../modules';
import { useSelector } from 'react-redux';
import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IChat } from '../../types';
import ChatItem from '../../components/ChatItem';

type TProps = {
  partnerUserId: number;
};

function ChatRoomMainContainer({ partnerUserId }: TProps) {
  const chatsState = useSelector(({ chats }: RootState) => ({
    data: chats.data,
  }));

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTo({
      top: scrollRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatsState.data]);

  return (
    <ChatRoomMainContainerBlock ref={scrollRef}>
      {chatsState.data.map(({ userId, msg, unixTime }: IChat, i: number) => (
        <ChatItem
          key={i}
          partnerUserId={partnerUserId}
          userId={userId}
          msg={msg}
          unixTime={unixTime}
        />
      ))}
    </ChatRoomMainContainerBlock>
  );
}

const ChatRoomMainContainerBlock = styled.div`
  width: 100%;
  height: 75%;
  @media screen and (min-width: 768px) {
    height: 450px;
  }
  overflow-y: auto;

  display: flex;
  flex-direction: column;

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

export default React.memo(ChatRoomMainContainer);
