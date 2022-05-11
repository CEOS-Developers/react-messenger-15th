import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import FriendsListScreen from './pages/FriendsListScreen';
import ChatRoomScreen from './pages/ChatRoomScreen';
import ChatListScreen from './pages/ChatListScreen';
import SettingScreen from './pages/SettingScreen';
import data from './assets/data.json';
import { useParams } from 'react-router';
import { useState } from 'react';
import { IChat } from './components/Interfaces';

function App() {
  const [currentUserId, setCurrentUserId] = useState<string>('user0');
  const [chatList, setChatList] = useState<IChat[]>(data[0].chats);

  return (
    <Routes>
      <Route path="/" element={<FriendsListScreen />} />
      <Route
        path="/ChatRoomScreen/:userId"
        element={
          <ChatRoomScreen
            chatList={chatList}
            setChatList={setChatList}
            currentUserId={currentUserId}
            setCurrentUserId={setCurrentUserId}
          />
        }
      />
      <Route path="/ChatListScreen" element={<ChatListScreen />} />
      <Route path="/SettingScreen" element={<SettingScreen />} />
    </Routes>
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
