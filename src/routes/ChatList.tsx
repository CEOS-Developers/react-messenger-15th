import styled from 'styled-components';
import { HeaderContains } from '../components/layout/CommonStyle';
import UnderNavBar from '../components/layout/UnderNavBar';
import Messages from '../components/Chattings';
import message from '../data/message.json';

const ChatList = () => {
  return (
    <>
      <ChatListContainer>
        <HeaderContains>Message</HeaderContains>
        <Content>
          {message.map(({ userId, userName, messages }) => (
            <Messages
              key={userId}
              userId={userId}
              userName={userName}
              message={messages[length - 1]}
            />
          ))}
        </Content>
        <UnderNavBar />
      </ChatListContainer>
    </>
  );
};

export default ChatList;

const ChatListContainer = styled.div``;

const Content = styled.div``;
