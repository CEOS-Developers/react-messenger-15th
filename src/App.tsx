import { createGlobalStyle } from 'styled-components';
import ChatListScreen from './pages/ChatListScreen';
import { useState } from 'react';
import { useParams } from 'react-router';
import chats from './db/data.json';

function App() {
  const { userId } = useParams();
  const [currentUserId, setCurrentUserId] = useState<string>('user0');
  const filteredChats = chats.filter((user) => user.userId === userId);
  const [chatList, setChatList] = useState(filteredChats[0]);

  return (
    <>
      <GlobalStyle />
      <ChatListScreen />
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
