import React from 'react';
import styled from 'styled-components';

import emoji_person from '../../assets/emoji_person.png';
import emoji_theme from '../../assets/emoji_theme.png';

import profile_pic from '../../assets/profile_squared.jpg';

const SettingsWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px;

  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 5%);
`;

const SettingsListTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
`;

const SettingsListTitleText = styled.div`
  margin: 24px 0px 0px 20px;

  font-size: 24px;
  font-weight: 800;
  color: #444444;
`;

const SettingsListContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SettingsListItem = styled.div`
  display: flex;

  height: 50px;

  padding: 6px 20px;

  background: white;
  transition: all 0.3s;

  &:hover {
    background: #fafafa;
  }
`;

const SettingsListItemProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 6px;
  width: 50px;
`;

const SettingsListItemProfile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;

const SettingsListItemContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SettingsListItemName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333333;
`;

const SettingsContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fafafa;
`;

const SettingsContentImg = styled.img`
  width: 180px;
  height: auto;

  border-radius: 18px;
`;

const SettingsContentText = styled.div`
  /* margin-top: 42px; */

  font-size: 12px;
  font-weight: 400;
  color: #666666;
`;

const Settings = () => {
  return (
    <SettingsWrapper>
      <SettingsList>
        <SettingsListTitleContainer>
          <SettingsListTitleText>Settings</SettingsListTitleText>
        </SettingsListTitleContainer>

        <SettingsListContentContainer>
          <SettingsListItem>
            <SettingsListItemProfileWrapper>
              <SettingsListItemProfile src={emoji_person} />
            </SettingsListItemProfileWrapper>
            <SettingsListItemContentWrapper>
              <SettingsListItemName>내 정보</SettingsListItemName>
            </SettingsListItemContentWrapper>
          </SettingsListItem>

          <SettingsListItem>
            <SettingsListItemProfileWrapper>
              <SettingsListItemProfile src={emoji_theme} />
            </SettingsListItemProfileWrapper>
            <SettingsListItemContentWrapper>
              <SettingsListItemName>테마 설정</SettingsListItemName>
            </SettingsListItemContentWrapper>
          </SettingsListItem>
        </SettingsListContentContainer>
      </SettingsList>

      <SettingsContent>
        {/* <SettingsContentImg src={emoji_theme} /> */}
        <SettingsContentText>설정 세부 항목</SettingsContentText>
      </SettingsContent>
    </SettingsWrapper>
  );
};

export default Settings;
