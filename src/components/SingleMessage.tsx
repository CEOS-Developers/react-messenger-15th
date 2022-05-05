import styled from 'styled-components';
const SingleMessage = ({ currentUser, chat }: any) => {
  const { userId, userName, text } = chat;
  console.log(text);
  return (
    <>
      <span>{userName}</span>
      <MessageText>{text}</MessageText>
    </>
  );
};

export default SingleMessage;

const MessageText = styled.div``;
