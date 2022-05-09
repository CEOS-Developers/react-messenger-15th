import useUser from "hooks/useUser";
import { IMessageBallon } from "interface";
import styled, { css } from "styled-components";

const MessageBallon = ({ message }: IMessageBallon) => {
  const { currentUser } = useUser();
  const isUser = message.user.id === currentUser.id;

  return (
    <MessageBox isUser={isUser}>
      <MessageImg alt="profile" src={message.user.profileImg} height={30} />
      <section>
        <MessageUser isUser={isUser}>{message.user.name}</MessageUser>
        <MessageText isUser={isUser}>{message.text}</MessageText>
      </section>
      <MessageTime isUser={isUser}>{message.time}</MessageTime>
    </MessageBox>
  );
};

const MessageBox = styled.section<{ isUser: boolean }>`
  display: flex;
  flex-direction: ${({ isUser }) => isUser && "row-reverse"};
  padding-bottom: 10px;
`;
const MessageText = styled.p<{ isUser: boolean }>`
  padding: 10px;
  font-size: 12px;
  margin: 7px;
  ${({ isUser }) =>
    isUser
      ? css`
          border-radius: 10px 0 10px 10px;
          background-color: #1986fc;
          color: #ffffff;
        `
      : css`
          border-radius: 0 10px 10px 10px;
          background-color: #f1f1f3;
        `};
`;
const MessageUser = styled.p<{ isUser: boolean }>`
  font-size: 12px;
  margin: 0;
  display: flex;
  ${({ isUser }) =>
    isUser
      ? css`
          justify-content: flex-end;
          margin-right: 5px;
        `
      : css`
          margin-left: 5px;
        `}
`;
const MessageImg = styled.img`
  border-radius: 70%;
`;
const MessageTime = styled.p<{ isUser: boolean }>`
  font-size: 10px;
  color: lightgrey;
  display: flex;
  align-items: flex-end;
  ${({ isUser }) =>
    isUser
      ? css`
          margin-left: 12px;
        `
      : css`
          margin-right: 12px;
        `}
`;

export default MessageBallon;
