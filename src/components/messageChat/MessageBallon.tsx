import { IMessageBallon } from "interface";
import styled, { css } from "styled-components";

const MessageBallon = ({ message }: IMessageBallon) => {
  return (
    <MessageBox>
      {message.user !== "krkorklo" ? (
        <ProfileImg alt="profile" src="profile.png" height={30} />
      ) : (
        <ProfileDate isMine={message.user === "krkorklo"}>
          {message.time}
        </ProfileDate>
      )}
      <section>
        <MessageUser isMine={message.user === "krkorklo"}>
          {message.user}
        </MessageUser>
        <MessageText isMine={message.user === "krkorklo"}>
          {message.text}
        </MessageText>
      </section>
      {message.user === "krkorklo" ? (
        <ProfileImg alt="profile" src="profile.png" height={30} />
      ) : (
        <ProfileDate isMine={message.user === "krkorklo"}>
          {message.time}
        </ProfileDate>
      )}
    </MessageBox>
  );
};

const MessageBox = styled.section`
  display: flex;
  padding-bottom: 10px;
`;
const MessageText = styled.p<{ isMine: boolean }>`
  display: inline-block;
  padding: 10px;
  font-size: 12px;
  margin: 7px;
  ${({ isMine }) =>
    isMine
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
const MessageUser = styled.p<{ isMine: boolean }>`
  font-size: 12px;
  margin: 0;
  display: flex;
  ${({ isMine }) =>
    isMine
      ? css`
          justify-content: flex-end;
          margin-right: 5px;
        `
      : css`
          margin-left: 5px;
        `}
`;
const ProfileImg = styled.img`
  border-radius: 70%;
`;
const ProfileDate = styled.p<{ isMine: boolean }>`
  font-size: 10px;
  color: lightgrey;
  display: flex;
  align-items: flex-end;
  ${({ isMine }) =>
    isMine
      ? css`
          margin-left: 12px;
        `
      : css`
          margin-right: 12px;
        `}
`;

export default MessageBallon;
