import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideButtonContainer from "./containers/SideButtonContainer";
import Chatroom from "./pages/Chatroom";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-family: var(--ff-main);
`

const EmptyDiv = styled.div`
  width: 5rem;
  height: 3rem;
  margin-left: 1rem;
  flex: 1;
`

function App() {

  return (
  <AppContainer>
    {/* <Chatroom/> */}
    <SideButtonContainer/>
    <Outlet/>
    <EmptyDiv/>
  </AppContainer>);
}

export default App;
