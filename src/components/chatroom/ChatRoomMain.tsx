import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Chat, Chats } from '../../types/index';
import ChatItem from './ChatItem';

type ChatRoomMainProps = {
  partnerUserId: number;
  chatList: Chats;
};

function ChatRoomMain({ partnerUserId, chatList }: ChatRoomMainProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTo({
      top: scrollRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatList]);

  return (
    <ChatRoomMainBlock ref={scrollRef}>
      {chatList.map(({ userId, msg, unixTime }: Chat, idx: number) => (
        <ChatItem
          key={idx}
          partnerUserId={partnerUserId}
          userId={userId}
          msg={msg}
          unixTime={unixTime}
        />
      ))}
    </ChatRoomMainBlock>
  );
}

const ChatRoomMainBlock = styled.div`
  width: 100%;
  height: 75%;
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

export default ChatRoomMain;
