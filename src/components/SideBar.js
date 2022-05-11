import React, { useState } from 'react';
import styled from 'styled-components';

import emoji_orange from '../assets/emoji_orange.png';

import icon_people_outline from '../assets/icon_people_outline.png';
import icon_people_filled from '../assets/icon_people_filled.png';
import icon_chat_outline from '../assets/icon_chat_outline.png';
import icon_chat_filled from '../assets/icon_chat_filled.png';
import icon_notification_outline from '../assets/icon_notification_outline.png';
import icon_notification_filled from '../assets/icon_notification_filled.png';
import icon_setting_outline from '../assets/icon_setting_outline.png';
import icon_setting_filled from '../assets/icon_setting_filled.png';

import profile_squared from '../assets/profile_squared.jpg';

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75px;
  height: 100%;

  // background: #166e48;
  background: #ffa440;
`;

const SideBarMenu = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
`;

const SideBarMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100px;
`;

const SideBarHeaderEmoji = styled.img`
  width: 24px;
  height: 24px;

  /* opacity: 0.3; */
`;

const SideBarMenuContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SideBarMenuFooter = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: 14px;
`;

const SideBarIconWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 12px 0px;

  opacity: 0.8;
`;

const SideBarIconWrapperSelected = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin: 12px 0px;

  border-left: 5px solid #eeeeee;
`;

const SideBarIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const SideBarProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 100px;

  border-top: 1px solid #eeeeee60;
`;

const SideBarProfile = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 8px;
`;

const SideBar = () => {
  return (
    <SideBarWrapper>
      <SideBarMenu>
        <SideBarMenuHeader>
          <SideBarHeaderEmoji src={emoji_orange} />
        </SideBarMenuHeader>

        <SideBarMenuContent>
          <SideBarIconWrapper>
            <SideBarIcon src={icon_people_outline} />
          </SideBarIconWrapper>
          <SideBarIconWrapperSelected>
            <SideBarIcon src={icon_chat_filled} />
          </SideBarIconWrapperSelected>
        </SideBarMenuContent>

        <SideBarMenuFooter>
          <SideBarIconWrapper>
            <SideBarIcon src={icon_notification_outline} />
          </SideBarIconWrapper>
          <SideBarIconWrapper>
            <SideBarIcon src={icon_setting_outline} />
          </SideBarIconWrapper>
        </SideBarMenuFooter>
      </SideBarMenu>

      <SideBarProfileWrapper>
        <SideBarProfile src={profile_squared} />
      </SideBarProfileWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
