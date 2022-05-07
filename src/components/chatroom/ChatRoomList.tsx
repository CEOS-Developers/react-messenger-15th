import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IChat, IChats } from '../../types/index';
import ChatItem from './ChatRoomItem';

type TChatRoomListProps = {
  partnerUserId: number;
  chatList: IChats;
};

function ChatRoomList({ partnerUserId, chatList }: TChatRoomListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTo({
      top: scrollRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatList]);

  return (
    <ChatRoomListBlock ref={scrollRef}>
      {chatList.map(({ userId, msg, unixTime }: IChat, idx: number) => (
        <ChatItem
          key={idx}
          partnerUserId={partnerUserId}
          userId={userId}
          msg={msg}
          unixTime={unixTime}
        />
      ))}
    </ChatRoomListBlock>
  );
}

const ChatRoomListBlock = styled.div`
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

export default React.memo(ChatRoomList);
