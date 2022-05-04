import styled, { css } from 'styled-components';

import me from '../../assets/me.json';
import friends from '../../assets/friends.json';
import { GetTime } from '../../utils/GetTime';

type ChatRoomMainProps = {
  // ref: any;
  chatList: any;
};

interface Chat {
  userId: any;
  sentAt: any;
  msg: any;
}

export function ChatRoomMain({ chatList }: ChatRoomMainProps) {
  const userId = 'user1';
  const userName = friends.filter((friend) => friend.userId === userId)[0]
    .userName;

  return (
    <ChatRoomMainBlock>
      {chatList.chats.map(({ userId, sentAt, msg }: Chat) => (
        <ChatItem key={sentAt} sender={userId}>
          <Img src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
          <TextWrapper>
            <UserName sender={userId}>
              {userId === 'user0' ? me.userName : userName}
            </UserName>
            <InfoWrapper sender={userId}>
              <Bubble sender={userId}>{msg}</Bubble>
              <Time>{GetTime(sentAt)}</Time>
            </InfoWrapper>
          </TextWrapper>
        </ChatItem>
      ))}
    </ChatRoomMainBlock>
  );
}

const ChatRoomMainBlock = styled.div`
  width: 100%;
  height: 75%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    background-clip: padding-box;
    border-radius: 20px;
    border: 8px solid transparent;
  }

  /* height: 70%; */

  /* width: 100%; */
  /* overflow: auto; */

  display: flex;
  flex-direction: column;
`;

const ChatItem = styled.div<{ sender: any }>`
  max-width: 95%;
  margin: 4%;

  display: flex;
  flex-direction: ${({ sender }: any) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
  justify-content: space-between;
`;

const Img = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 88%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div<{ sender: any }>`
  width: 100%;

  font-size: 14px;
  color: #343a40;

  display: flex;
  flex-direction: ${({ sender }: any) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
`;

const InfoWrapper = styled.div<{ sender: any }>`
  width: 100%;

  display: flex;
  flex-direction: ${({ sender }: any) =>
    sender === 'user0' ? 'row-reverse' : 'row'};
`;

const Bubble = styled.div<{ sender: any }>`
  padding: 3%;
  margin-top: 2.5%;

  font-size: 12px;
  line-height: 18px;

  display: flex;

  ${({ sender }: any) =>
    sender === 'user0'
      ? css`
          flex-direction: row-reverse;
          color: #ffffff;
          background: #1986fc;
          border-radius: 12px 1px 12px 12px;
        `
      : css`
          flex-direction: 'row';
          color: #000000;
          background: #f1f1f3;
          border-radius: 1px 12px 12px 12px;
        `}
`;

const Time = styled.div`
  color: #c8c8c8;
  font-size: 10px;
  margin: 0 2%;

  display: flex;
  align-items: end;
`;
