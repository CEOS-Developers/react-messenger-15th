import styled from 'styled-components';
import { IChat } from '../interface/interface';
const SingleMessage = ({ chat }: { chat: IChat }) => {
  const { userId, userName, text, time } = chat;
  console.log(chat);
  return (
    <>
      <ProfileImg src={`/assets/${userId}.jpg`} />
      <span>{userName}</span>
      <MessageText>
        {text}
        {time}
      </MessageText>
    </>
  );
};

export default SingleMessage;

const MessageText = styled.div``;
const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 70%;
`;
