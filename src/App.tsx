import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import styled from 'styled-components';
import FriendList from './routes/FriendList';
import ChatList from './routes/ChatList';
import Setting from './routes/Setting';
import MessengerBox from './components/Message/MessengerBox';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <MessengerContainer>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/messengerbox/:userName" element={<MessengerBox />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </MessengerContainer>
    </RecoilRoot>
  );
};
export default App;

const MessengerContainer = styled.div`
  /* 너비 | 스타일 | 색 */
  
  margin: 0 auto;
  margin-top: 5rem;
  background: white;
  border-radius: 0.5rem;
  height: 43rem;
  width: 26rem;
  justify-content: flex-start;
`;
