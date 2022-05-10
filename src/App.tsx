import { createGlobalStyle } from 'styled-components';
import ChatRoomScreen from './components/ChatRoomScreen';
import { useState } from 'react';
import { IChatProps } from './components/Interfaces';

function App() {
  const [chatList, setChatList] = useState<IChatProps[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>('user0');

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
