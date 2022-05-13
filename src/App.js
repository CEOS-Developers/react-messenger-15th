import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import MainContainer from './components/MainContainer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  div {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333333;
  }

  * {
    font-family: "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", sans-serif;
  }

  *{
    -ms-overflow-style: none;
  }
  
  ::-webkit-scrollbar {
      display: none;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  // background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  background: #eff2f5;
`;

const AppHeader = styled.header`
  position: absolute;
  top: 40px;
  left: 40px;
  text-align: left;

  display: flex;
  flex: 1;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 300;
  color: #444444;

  opacity: 1;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

const AppHeaderEmoji = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;

const AppContent = styled.div`
  display: flex;
`;

const AppFooter = styled.footer`
  position: absolute;
  bottom: 40px;
  right: 40px;
  text-align: right;

  font-size: 13px;
  font-weight: 300;
  color: #333333;
`;

const BlinkingEffect = () => {
  return keyframes`
  50% {
    opacity: 0;
  }
  `;
};

const AnimatedCursor = styled.div`
  animation: ${BlinkingEffect} 1.25s ease-in-out infinite;
  margin-left: 5px;
  font-weight: 600;
`;

const App = () => {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Link to="/">
        <AppHeader className="App-header">
          <AppHeaderEmoji>🍊</AppHeaderEmoji>
          <div>
            <strong>Orange</strong>
            Chat
          </div>
          <AnimatedCursor>|</AnimatedCursor>
        </AppHeader>
      </Link>

      <AppContent className="App-Content">
        <MainContainer />
      </AppContent>

      <AppFooter className="App-Footer">
        <section>
          <strong>💖 CEOS 15 FRONTEND</strong>
        </section>
        <a
          href="https://github.com/poodlepoodle/react-messenger-15th"
          target="_blank"
        >
          github.com/poodlepoodle/react-messenger-15th
        </a>
      </AppFooter>
    </AppContainer>
  );
};

export default App;
