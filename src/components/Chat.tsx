import styled, { css } from 'styled-components';
import { GetTime } from '../utils/GetTime';
import { IChat } from './Interfaces';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    userId?: string;
    message?: string;
    msgId?: number;
  }
} //jsx안에 사용

const Chat = ({ userId, message, msgId }: IChat) => {
  return (
    <Wrapper>
      <ChatWrapper userId={userId} msgId={msgId}>
        <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
        <ChatInfo>
          <UserName userId={userId}>{userId}</UserName>
          <Bubble userId={userId}>{message}</Bubble>
        </ChatInfo>
        <Time>{GetTime(msgId)}</Time>
      </ChatWrapper>
    </Wrapper>
  );
};

export default Chat;

const Bubble = styled.section`
  display: flex;
  padding: 2% 4% 2% 4%;

  ${({ userId }) =>
    userId === 'user0'
      ? css`
          flex-direction: row;
          color: #ffffff;
          background: #1986fc;
          border-radius: 12px 1px 12px 12px;
        `
      : css`
          flex-direction: 'row-reverse';
          color: #000000;
          background: #f1f1f3;
          border-radius: 1px 12px 12px 12px;
        `}
`;

const Time = styled.section`
  display: flex;
  align-items: end;
  margin: 0 2%;
  font-size: 6px;
`;

const UserName = styled.section`
  max-width: 100%;
  display: flex;

  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
`;

const ChatInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;

  margin: 2%;
  margin-top: 0%;
`;

const ChatWrapper = styled.section`
  max-width: 95%;
  margin: 4%;
  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
`;

const Wrapper = styled.section`
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
`;
