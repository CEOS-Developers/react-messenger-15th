import React, { useState } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;

  /* justify-content: center; */
  /* align-items: center; */

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
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <MainView />
    </MainWrapper>
  );
};

export default MainContainer;
