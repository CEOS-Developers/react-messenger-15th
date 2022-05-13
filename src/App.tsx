import React from "react";
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import IconSet from "./Component/Molecule/IconTextSet";

import Chatlist from '../src/Pages/Chatlist';
import Userlist from '../src/Pages/Userlist';
import Setting from '../src/Pages/Setting';
import Room1 from '../src/Pages/Room1';
import Room2 from '../src/Pages/Room2';
import Room3 from '../src/Pages/Room3';

function App() {
    return (<Background>
      <AppWrapper>
        <IconWrapper>
            <IconSet></IconSet>
        </IconWrapper>
        <ContentsWrapper>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Chatlist/>} />
              <Route path="/Userlist" element={<Userlist/>} />
              <Route path="/Setting" element={<Setting/>} />
              <Route path="/Room1" element={<Room1/>} />
              <Route path="/Room2" element={<Room2/>} />
              <Route path="/Room3" element={<Room3/>} />
            </Routes>
          </PageWrapper>
        </ContentsWrapper>
      </AppWrapper>
    </Background>
    )
};

const IconWrapper = styled.div`
    width : 80px;
    height: 100%;
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
    margin : 0px 32px ;
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

const ContentsWrapper = styled.div`
    width: calc( 100% - 120px );
    height: 100%;
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    background: #FFFFFF;
    border-radius: 24px;
    overflow : auto;
    padding : 0px 20px;
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction : row;
    justify-contents : space-evenly;
    align-items: center;
    width: 80%;
    height: 80%;
    margin : auto;
`;

const Background = styled.div`
    display : flex;
    width : 100vw;
    height : 100vh;
    background: #ECEDF0;
    text-decoration : none;
`;

export default App;
