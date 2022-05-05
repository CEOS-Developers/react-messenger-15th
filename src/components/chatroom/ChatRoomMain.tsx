import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Chats, Chat } from '../../types/index';
import me from '../../data/me.json';
import friends from '../../data/friends.json';
import { getTimeStamp } from '../../utils/getTimeStamp';

type ChatRoomMainProps = {
  partnerUserId: number;
  chatList: any;
};

export function ChatRoomMain({ partnerUserId, chatList }: ChatRoomMainProps) {
  const partner = friends.filter(
    (friend) => parseInt(friend.userId) === partnerUserId
  )[0];

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTo({
      top: scrollRef.current!.scrollHeight,
      behavior: 'smooth',
    });
  }, [chatList]);

  return (
    <ChatRoomMainBlock ref={scrollRef}>
      {chatList.chats.map(({ userId, msg, unixTime }: Chat, idx: number) => (
        <ChatItem key={idx} userId={userId}>
          <img src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName userId={userId}>
              {userId === me.userId ? me.userName : partner.userName}
            </UserName>
            <MsgWrapper userId={userId}>
              <Bubble userId={userId}>{msg}</Bubble>
              <Timestamp>{getTimeStamp(unixTime)}</Timestamp>
            </MsgWrapper>
          </TextWrapper>
        </ChatItem>
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

const ChatItem = styled.div<{ userId: string }>`
  margin: 3%;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === me.userId ? 'row-reverse' : 'row'};

  img {
    width: 40px;
    height: 40px;
    margin: 1%;

    border-radius: 50%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  width: 83%;
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.span<{ userId: string }>`
  font-size: 0.7rem;
  color: #3f464db2;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === me.userId ? 'row-reverse' : 'row'};
`;

const MsgWrapper = styled.div<{ userId: string }>`
  width: 100%;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === me.userId ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div<{ userId: string }>`
  padding: 3.5%;
  margin-top: 2%;

  font-size: 0.7rem;
  line-height: 1.1rem;

  display: flex;
  ${({ userId }) =>
    userId === me.userId
      ? css`
          flex-direction: row-reverse;
          color: #ffffffe9;
          background: #1986fc;
          border-radius: 12px 1px 12px 12px;
        `
      : css`
          flex-direction: 'row';
          color: #000000e5;
          background: #f1f1f3;
          border-radius: 1px 12px 12px 12px;
        `}
`;

const Timestamp = styled.span`
  color: #c8c8c8;
  font-size: 0.5rem;

  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
