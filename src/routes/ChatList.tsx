import styled from 'styled-components';
import UnderNavBar from '../components/UnderNavBar';
import message from '../data/message.json';

const ChatList = () => {
  return (
    <>
      <ChatListContainer>
        <Header>Message</Header>
        <Content></Content>
        <UnderNavBar />
      </ChatListContainer>
    </>
  );
};

export default ChatList;

const ChatListContainer = styled.div``;
const Header = styled.div``;
const Content = styled.div``;
