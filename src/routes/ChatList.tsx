import styled from 'styled-components';
import { HeaderContains, HeaderText } from '../components/layout/CommonStyle';
import UnderNavBar from '../components/layout/UnderNavBar';
import Messages from '../components/Chattings';
import message from '../data/message.json';
import { BsChatDots } from 'react-icons/bs';

const ChatList = () => {
  return (
    <ChatListContainer>
      <HeaderContains>
        <BsChatDots size={20} />
        <HeaderText>Message</HeaderText>
      </HeaderContains>
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
