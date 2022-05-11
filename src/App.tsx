import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import FriendsListScreen from './pages/FriendsListScreen';
import { useState } from 'react';
import data from './assets/data.json';
import { IChat } from './components/Interfaces';

function App() {
  const [currentUserId, setCurrentUserId] = useState<string>('user0');
  const [chatList, setChatList] = useState<IChat[]>(data[0].chats);

  return (
    <Routes>
      <Route path="/" element={<FriendsListScreen />} />
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
