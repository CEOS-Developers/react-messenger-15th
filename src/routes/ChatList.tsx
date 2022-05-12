import styled from 'styled-components';
import { HeaderContains } from '../components/layout/CommonStyle';
import UnderNavBar from '../components/layout/UnderNavBar';
import Messages from '../components/Chattings';
import message from '../data/message.json';

const ChatList = () => {
  return (
    <ChatListContainer>
      <HeaderContains>Message</HeaderContains>
      <Content>
        {message.map((userMessage) => (
          <Messages
            key={userMessage.userId}
            userId={userMessage.userId}
            userName={userMessage.userName}
            message={userMessage.messages[userMessage.messages.length - 1].text}
          />
        ))}
      </Content>
      <UnderNavBar />
    </ChatListContainer>
  );
};

export default ChatList;

const ChatListContainer = styled.div``;

const Content = styled.div``;
