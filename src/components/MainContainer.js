import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import SideBar from './SideBar';

import Home from './pages/Home';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import Nomatch from './pages/Nomatch';

const MainWrapper = styled.div`
  display: flex;

  width: 1000px;
  height: 550px;
  border-radius: 14px;
  overflow: hidden;

  background: white;
  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 15%);
`;

const PageContainer = styled.div`
  flex: 1;
  display: flex;

  background: white;
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <SideBar />

      <Routes>
        <Route
          path="/"
          element={
            <PageContainer>
              <Outlet />
            </PageContainer>
          }
        >
          <Route index element={<Home />} />
          <Route path="friends" element={<Friends />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
      </Routes>
    </MainWrapper>
  );
};

export default MainContainer;
