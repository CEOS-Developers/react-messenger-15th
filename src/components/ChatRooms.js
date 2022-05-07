import React, { useState } from "react";
import styled from "styled-components";

import jh_pic from "../assets/jh_pic.png";
import cr_pic from "../assets/cr_pic.png";
import sw_pic from "../assets/sw_pic.png";

const ChatRoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 220px;
  height: 100%;

  margin-left: 15px;
  padding-right: 10px;
  border-top: 1px solid #EEEEEE;
`;

const ChatRoomsItem = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;

  width: 100%;
  height: 45px;
  margin-top: 10px;

  border-radius: 12px;

  &:hover{  
    background-color : #EEEEEE3F;
  }
`;

const ChatRoomsItemProfile = styled.img`
  width: 36px;
  height: 36px;

  margin-left: 10px;
  margin-right: 16px;
`;

const ChatRoomsItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  /* flex : 1; */
  width: 100%;
  height: 100%;

  /* background: green; */
`;

const ChatRoomsItemContentName = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #666666;
  
  margin-bottom: 3px;
  `;

const ChatRoomsItemContentInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChatRoomsItemContentRecent = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: #999999;

  max-width: 120px;
  margin-right: 8px;
`;

const ChatRoomsItemContentTime = styled.div`
  font-size: 10px;
  font-weight: 200;
  color: #CCCCCC;
`;

const ChatRooms = () => {
    return (
      <ChatRoomsWrapper>
        <ChatRoomsItem>
          <ChatRoomsItemProfile src={jh_pic} />
          <ChatRoomsItemContent>
            <ChatRoomsItemContentName>김주현</ChatRoomsItemContentName>
            <ChatRoomsItemContentInfo>
              <ChatRoomsItemContentRecent><strong>지금 장난 하나요??</strong></ChatRoomsItemContentRecent>
              <ChatRoomsItemContentTime>2분 전</ChatRoomsItemContentTime>
            </ChatRoomsItemContentInfo>
          </ChatRoomsItemContent>
        </ChatRoomsItem>

        <ChatRoomsItem>
          <ChatRoomsItemProfile src={cr_pic} />
          <ChatRoomsItemContent>
            <ChatRoomsItemContentName>김채림</ChatRoomsItemContentName>
            <ChatRoomsItemContentInfo>
              <ChatRoomsItemContentRecent>저기요 제출 2분 남았어요</ChatRoomsItemContentRecent>
              <ChatRoomsItemContentTime>11분 전</ChatRoomsItemContentTime>
            </ChatRoomsItemContentInfo>
          </ChatRoomsItemContent>
        </ChatRoomsItem>

        <ChatRoomsItem>
          <ChatRoomsItemProfile src={sw_pic} />
          <ChatRoomsItemContent>
            <ChatRoomsItemContentName>전시원형</ChatRoomsItemContentName>
            <ChatRoomsItemContentInfo>
              <ChatRoomsItemContentRecent>형 나좀 숨겨줘 지금 어디 ...</ChatRoomsItemContentRecent>
              <ChatRoomsItemContentTime>1시간 전</ChatRoomsItemContentTime>
            </ChatRoomsItemContentInfo>
          </ChatRoomsItemContent>
        </ChatRoomsItem>
      </ChatRoomsWrapper>
    );
  }
  
  export default ChatRooms;