import React, { useState } from "react";
import styled from "styled-components";

const ChatInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 100%;

  margin-right: 25px;
  border-top: 1px solid #EEEEEE;
`;

const ChatInfo = () => {
    return (
      <ChatInfoWrapper>
        <h4>채팅방 정보</h4>
        <br />
        <h4>Under construction...</h4>
      </ChatInfoWrapper>
    );
  }
  
  export default ChatInfo;