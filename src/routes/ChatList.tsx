import styled from 'styled-components';
import message from '../data/message.json';

const ChatList = () => {
  return (
    <>
      <ChatListContainer>
        <Header>Message</Header>
        <Content></Content>
      </ChatListContainer>
    </>
  );
};

export default ChatList;

const ChatListContainer = styled.div``;
const Header = styled.div``;
const Content = styled.div``;
