import React, { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import MainView from "./components/MainView";
// import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
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

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  // background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  background: #EFF2F5;
`;

const HeaderEmoji = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;

const HeaderDiv = styled.header`
  position: absolute;
  top: 40px;
  left: 40px;
  text-align: left;
  
  display: flex;
  flex : 1;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 300;
  color: #444444;
`;

const ContentDiv = styled.div`
  display: flex;
`;

const FooterDiv = styled.footer`
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
    <WrapperDiv className="App">
      <GlobalStyle />
      <HeaderDiv className="App-header">
        <HeaderEmoji>💬</HeaderEmoji>
        <div>Something to Say?</div>
        <AnimatedCursor>|</AnimatedCursor>
      </HeaderDiv>

      <ContentDiv className="App-Content">
        <MainView />
      </ContentDiv>

      <FooterDiv className="App-Footer">
        <section>
          <strong>💖 CEOS 15 FRONTEND</strong>
        </section>
        <a
          href="https://github.com/poodlepoodle/react-messenger-15th"
          target="_blank"
        >
          github.com/poodlepoodle/react-messenger-15th
        </a>
      </FooterDiv>
    </WrapperDiv>
  );
}

export default App;