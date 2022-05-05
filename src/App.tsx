import { createGlobalStyle } from 'styled-components';
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
