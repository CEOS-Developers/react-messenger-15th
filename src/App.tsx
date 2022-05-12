import { Routes, Route } from 'react-router';
import { ReceiverUserIdProvider } from '../src/contexts/ReceiverUserIdContext';
import { ChatListProvider } from './contexts/ChatListContext';
import { useEffect } from 'react';
import styled from 'styled-components';

import CommonLayout from './components/CommonLayout';
import FriendList from './pages/FriendList';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

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
          <Routes>
            <Route element={<CommonLayout headerText={'Friends'} />}>
              <Route index element={<FriendList />} />
            </Route>
            <Route element={<CommonLayout headerText={'Messages'} />}>
              <Route path="/chatlist" element={<ChatList />} />
            </Route>
            <Route element={<CommonLayout headerText={'Chatting'} />}>
              <Route path="/chatlist/:userId" element={<ChatRoom />} />
            </Route>
            <Route element={<CommonLayout headerText={'Settings'} />}>
              <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
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
