import styled, { createGlobalStyle } from 'styled-components';
import ChatRoomScreen from './components/ChatRoomScreen';

function App() {
  return (
    <>
      <GlobalStyle />
      <ChatRoomScreen />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

html, 
body {
    margin: 10%;
    padding: 0;

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
