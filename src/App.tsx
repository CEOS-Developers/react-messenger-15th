import React from "react";
import InputContainer from "./containers/InputContainer";
import MessageContainer from "./containers/MessageContainer";
import styled from "styled-components";
import ProfileContainer from "./containers/ProfileContainer";


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
    <ProfileContainer/>
    <MessageContainer/>
    <InputContainer/>
  </AppContainer>);
}

export default App;
