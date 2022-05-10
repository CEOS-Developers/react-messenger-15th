import { createGlobalStyle } from 'styled-components';
import ChatRoomScreen from './pages/ChatRoomScreen';
import { useState } from 'react';
import data from './db/data.json';
import { IChat } from './components/Interfaces';

function App() {
  const [currentUserId, setCurrentUserId] = useState<string>('user0');
  const [chatList, setChatList] = useState<IChat[]>(data[0].chats);

  return (
    <>
      <GlobalStyle />
      <ChatRoomScreen
        chatList={chatList}
        setChatList={setChatList}
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
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
