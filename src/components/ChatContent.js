import React, { useState } from 'react';
import styled from 'styled-components';

import ChatList from './ChatList';

import profile_pic from '../assets/profile_pic.png';
import cr_pic from '../assets/cr_pic.png';
import smile_icon from '../assets/smile_icon.png';
import thumb_icon from '../assets/thumb_icon.png';

const ChatContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  width: 100%;
  height: 100%;

  border-top: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
`;

const ChatContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
`;

const ChatContentHeaderName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #353841;

  margin-left: 24px;
`;

const ChatContentHeaderProfiles = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 24px;
`;

const ChatContentHeaderProfile = styled.img`
  width: 28px;
  height: 28px;

  background-color: white;
  border-radius: 50%;
  border: 2px solid white;

  margin-left: -8px;
`;

const ChatContentHeaderNewProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;

  font-size: 20px;
  color: #098aff;

  background-color: #ecf5ff;
  border-radius: 50%;
  border: 2px solid #ecf5ff;

  margin-left: -8px;
`;

const ChatView = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ChatContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  border-top: 1px solid #eeeeee;
`;

const ChatContentForm = styled.form`
  z-index: 1000 !important;
`;

const ChatContentInput = styled.input`
  width: 400px;
  height: 30px;
  padding: 0 0 0 10px;

  outline: none;
  border-radius: 8px;
  border-color: transparent;
  background-color: #f8f8fa;

  text-align: left;
  /* color: #F8F8FA; */
  font-size: 11px;
  font-weight: 400;
`;

const ChatContentInputIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-left: 10px;
`;

const ChatContentInputIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 6px;

  opacity: 0.3;
`;

const ChatContent = () => {
  return (
    <ChatContentWrapper>
      <ChatContentHeader>
        <ChatContentHeaderName>김채림</ChatContentHeaderName>
        <ChatContentHeaderProfiles>
          <ChatContentHeaderProfile src={cr_pic} />
          <ChatContentHeaderProfile src={profile_pic} />
          <ChatContentHeaderNewProfile>+</ChatContentHeaderNewProfile>
        </ChatContentHeaderProfiles>
      </ChatContentHeader>

      <ChatView>
        <ChatList />
      </ChatView>

      <ChatContentFooter>
        <ChatContentForm>
          <ChatContentInput
            type="text"
            autoFocus
            // value={content}
            placeholder="Type something here..."
          />
          {/* onChange={handleChange} /> */}
        </ChatContentForm>
        <ChatContentInputIcons>
          <ChatContentInputIcon src={smile_icon} />
          <ChatContentInputIcon src={thumb_icon} />
        </ChatContentInputIcons>
      </ChatContentFooter>
    </ChatContentWrapper>
  );
};

export default ChatContent;
