import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';

const MainWrapper = styled.div`
  display: flex;

  width: 1000px;
  height: 550px;
  border-radius: 14px;
  overflow: hidden;

  background: white;
  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 20%);
`;

const MainView = styled.div`
  flex: 1;
  display: flex;

  background: white;
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <SideBar />
      <MainView />
    </MainWrapper>
  );
};

export default MainContainer;
