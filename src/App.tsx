import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Globalstyle';
import styled from 'styled-components';
import FriendList from './routes/FriendList';
import ChatList from './routes/ChatList';
import Setting from './routes/Setting';
import user from './data/user.json';
import MessengerBox from './components/MessengerBox';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MessengerContainer>
        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/messengerbox/:uerName" element={<MessengerBox />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </MessengerContainer>
    </>
  );
};
export default App;

const MessengerContainer = styled.div`
  /* 너비 | 스타일 | 색 */
  border: 0.08rem solid #c2bbbb;
  margin: 0 auto;
  margin-top: 5rem;
  background: white;
  border-radius: 0.5rem;
  height: 43rem;
  width: 26rem;
`;
