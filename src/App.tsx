import { createGlobalStyle } from 'styled-components';
import FriendsListScreen from './pages/FriendsListScreen';
import { useState } from 'react';
import { IChat } from './components/Interfaces';

function App() {
  const [chatList, setChatList] = useState<IChat[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>('user0');

  return (
    <>
      <GlobalStyle />
      <FriendsListScreen />
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
