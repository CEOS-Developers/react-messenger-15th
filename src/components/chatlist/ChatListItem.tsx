import styled from 'styled-components';
import { Link } from 'react-router-dom';

type ChatListItemProps = {
  userId: number;
  userName: string;
  lastMsg: string;
};

function ChatListItem({ userId, userName, lastMsg }: ChatListItemProps) {
  return (
    <ChatListItemBlock>
      <StyledLink to={`/chatlist/${userId}`}>
        <img src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`} />
        <TextWrapper>
          <span>{userName}</span>
          <div className="LastMessage">{lastMsg}</div>
        </TextWrapper>
      </StyledLink>
    </ChatListItemBlock>
  );
}

const ChatListItemBlock = styled.div`
  width: 100%;
  height: 17%;
  padding-left: 8%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: #c4c4c41d;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;

  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 5%;

  span {
    width: 100%;
    margin-bottom: 3%;
    color: #343a40;
  }

  .LastMessage {
    width: 85%;
    font-size: 0.8rem;

    text-decoration: none;
    color: gray;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default ChatListItem;
