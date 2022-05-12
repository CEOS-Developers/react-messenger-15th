import { useChatListState } from '../../contexts/ChatListContext';
import React from 'react';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IChat } from '../../types/index';
import ChatItem from '../../components/ChatRoomItem';

type TChatRoomListProps = {
  partnerUserId: number;
};

function ChatRoomList({ partnerUserId }: TChatRoomListProps) {
  const chatListState = useChatListState();

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTo({
      top: scrollRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatListState.chatList]);

  return (
    <ChatRoomListBlock ref={scrollRef}>
      {chatListState.chatList.map(
        ({ userId, msg, unixTime }: IChat, idx: number) => (
          <ChatItem
            key={idx}
            partnerUserId={partnerUserId}
            userId={userId}
            msg={msg}
            unixTime={unixTime}
          />
        )
      )}
    </ChatRoomListBlock>
  );
}

const ChatRoomListBlock = styled.div`
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

export default React.memo(ChatRoomList);
