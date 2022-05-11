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
        {message.map((usermessage) => (
          <Messages
            key={usermessage.userId}
            userId={usermessage.userId}
            userName={usermessage.userName}
            message={usermessage.messages[usermessage.messages.length - 1].text}
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
