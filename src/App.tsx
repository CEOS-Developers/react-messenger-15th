import { Route, Routes, useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import FriendsListScreen from './pages/FriendsListScreen';
import ChatRoomScreen from './pages/ChatRoomScreen';
import ChatListScreen from './pages/ChatListScreen';
import SettingScreen from './pages/SettingScreen';
import Layout from './components/sharings/Layout';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout headerText={'Friends'} />}>
          <Route index element={<FriendsListScreen />} />
        </Route>
        <Route element={<Layout headerText={'Messages'} />}>
          <Route path="/ChatListScreen" element={<ChatListScreen />} />
        </Route>
        <Route element={<Layout headerText={'Chatting'} />}>
          <Route path="/ChatRoomScreen/:userId" element={<ChatRoomScreen />} />
        </Route>
        <Route element={<Layout headerText={'Setting'} />}>
          <Route path="/SettingScreen" element={<SettingScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

html, 
body {

    display: flex;
    align-items: center;
    justify-content: center;
}


:root {
    --vh: 100%;
}

button:hover  {
    cursor: pointer;
}

`;
