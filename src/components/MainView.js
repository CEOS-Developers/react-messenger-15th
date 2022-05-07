import React, { useState } from 'react';
import styled from 'styled-components';

import MainHeader from './MainHeader';
import MainContent from './MainContent';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1000px;
  height: 550px;
  border-radius: 12px;
  overflow: hidden;

  // background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
  background: white;
`;

const MainView = () => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainContent />
    </MainWrapper>
  );
};

export default MainView;
