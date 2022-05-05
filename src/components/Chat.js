import styled, { css } from 'styled-components';

const Chat = ({ userId, message, msgId }) => {
  return (
    <ChatSection userId={userId} msgId={msgId}>
      <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
      <Bubble userId={userId}>
        <TextWrapper userId={userId}>{message}</TextWrapper>
      </Bubble>
    </ChatSection>
  );
};

export default Chat;

const TextWrapper = styled.section`
  max-width: 88%;
  display: flex;

  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row' : 'row-reverse'};
`;

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

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;

  margin: 2%;
  margin-top: 0%;
`;

const ChatSection = styled.section`
  max-width: 95%;
  margin: 4%;
  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
`;
