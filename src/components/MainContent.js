import React, { useState } from "react";
import styled from "styled-components";

import ChatRooms from "./ChatRooms";
import ChatContent from "./ChatContent";
import ChatInfo from "./ChatInfo";

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex : 1;
  width: 100%;
`;

const MainContent = () => {
    return (
      <MainContentWrapper>
        <ChatRooms />
        <ChatContent />
        <ChatInfo />
      </MainContentWrapper>
    );
  }
  
  export default MainContent;