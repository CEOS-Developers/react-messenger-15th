import React from "react";
import styled from "styled-components";
import Chatroom from "./pages/Chatroom";


const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  font-family: var(--ff-main);
`;

function App() {
  return (
  <AppContainer>
    <Chatroom/>
  </AppContainer>);
}

export default App;
