import { IChat } from '../../types/index';
import React from 'react';
import styled, { css } from 'styled-components';
import me from '../../data/me.json';
import friends from '../../data/friends.json';
import { getTimeStamp } from '../../utils/getTimeStamp';
import { useReceiverUserIdDispatch } from '../../contexts/ReceiverUserIdContext';

type TChatRoomItemProps = {
  partnerUserId: number;
  userId: number;
  msg: string;
  unixTime: number;
};

function ChatRoomItem({
  partnerUserId,
  userId,
  msg,
  unixTime,
}: TChatRoomItemProps) {
  const partner = friends.filter(
    (friend) => friend.userId === partnerUserId
  )[0];

  return (
    <ChatItemBlock userId={userId}>
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
    </ChatItemBlock>
  );
}

const ChatItemBlock = styled.div<{ userId: number }>`
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
  width: 85%;
  max-width: 78.5%;
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.span<{ userId: number }>`
  font-size: 0.7rem;
  color: #3f464db2;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === me.userId ? 'row-reverse' : 'row'};
`;

const MsgWrapper = styled.div<{ userId: number }>`
  width: 100%;

  display: flex;
  flex-direction: ${({ userId }) =>
    userId === me.userId ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div<{ userId: number }>`
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

export default React.memo(ChatRoomItem);
