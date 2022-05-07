import { ReceiverUserIdProvider } from '../src/contexts/ReceiverUserIdContext';
import { ChatListProvider } from './contexts/ChatListContext';
import { useEffect } from 'react';
import styled from 'styled-components';
import ChatRoom from './pages/ChatRoom';

function App() {
  function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setVh();
  }, []);

  return (
    <ResponsiveBlock>
      <ReceiverUserIdProvider>
        <ChatListProvider>
          <ChatRoom />
        </ChatListProvider>
      </ReceiverUserIdProvider>
    </ResponsiveBlock>
  );
}

const ResponsiveBlock = styled.div`
  // Desktop
  @media screen and (min-width: 768px) {
    margin-top: 10%;

    width: 350px;
    height: 700px;

    border-radius: 20px;
    box-shadow: 0 0 25px rgba(105, 85, 85, 0.5);
  }

  // Mobile
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export default App;
