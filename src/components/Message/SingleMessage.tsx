import styled, { css } from 'styled-components';
import { IMessageData, IUserNameProps } from '../../interface/interface';
const SingleMessage = ({ chat }: { chat: IMessageData }) => {
  const { userId, userName, text, time } = chat;
  return (
    <SingleMessageContainer userName={userName}>
      <ProfileImg src={`/assets/${userId}.jpg`} />
      <ContextContainer>
        <UserName userName={userName}>{userName}</UserName>
        <MessageText userName={userName}>{text}</MessageText>
      </ContextContainer>
      <ShowTime>{time}</ShowTime>
    </SingleMessageContainer>
  );
};

export default SingleMessage;

const SingleMessageContainer = styled.div<IUserNameProps>`
  padding: 1rem;
  display: flex;
  ${({ userName }) =>
    userName === 'chaaerim'
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          justify-content: flex-start;
        `}
`;

const UserName = styled.div<IUserNameProps>`
  font-size: 14px;
  padding: 0.2rem;
  ${({ userName }) =>
    userName === 'chaaerim'
      ? css`
          margin-left: auto;
        `
      : css`
          justify-content: flex-start;
        `}
`;
const MessageText = styled.div<IUserNameProps>`
  align-items: center;
  font-size: 13px;
  padding: 0.5rem;
  line-height: 1.5rem;
  ${({ userName }) =>
    userName === 'chaaerim'
      ? css`
          margin-left: 0.5rem;
          background-color: #195bd4;
          border-radius: 0.5rem 0 0.5rem 0.5rem;
          color: white;
        `
      : css`
          background-color: #e7e3e3;
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          margin-right: 0.5rem;
        `};
`;

const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShowTime = styled.div`
  color: #c4c3c3;
  font-size: 11px;
  margin-top: auto;
`;

const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 70%;
`;
