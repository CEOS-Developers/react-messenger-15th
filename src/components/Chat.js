import styled from 'styled-components';

const Chat = ({ userId, message, msgId }) => {
  return (
    <ChatSection userId={userId} msgId={msgId}>
      <ProfileImg src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
      <TextWrapper>{message}</TextWrapper>
    </ChatSection>
  );
};

export default Chat;

const TextWrapper = styled.section`
  width: 88%;
  display: flex;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
`;

const ChatSection = styled.section`
  max-width: 95%;
  margin: 4%;
  display: flex;
  flex-direction: ${({ userId }) =>
    userId === 'user0' ? 'row-reverse' : 'row'};
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
