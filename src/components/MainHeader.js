import React, { useState } from 'react';
import styled from 'styled-components';

import fm_logo from '../assets/fm_logo.png';
import search_icon from '../assets/search_icon.png';
import setting_icon from '../assets/setting_icon.png';
import profile_pic from '../assets/profile_pic.png';

const MainHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
`;

const MainHeaderIcon = styled.img`
  width: 26px;
  height: 26px;

  margin-left: 25px;
`;

const MainHeaderSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;

  width: 450px;
  height: 100%;
`;

const MainHeaderSearchBarIcon = styled.img`
  width: 14px;
  height: 14px;

  opacity: 0.5;
`;

const MainHeaderSearchBarForm = styled.form`
  z-index: 1000 !important;
`;

const MainHeaderSearchBarInput = styled.input`
  width: 400px;
  height: 30px;
  padding: 0 0 0 10px;

  outline: none;
  border-radius: 10px;
  border-color: transparent;

  text-align: left;
  color: #999999;
  font-size: 11px;
  font-weight: 400;
`;

const MainHeaderMenu = styled.div`
  display: flex;
  align-items: center;

  margin-right: 25px;
`;

const MainHeaderMenuIcon = styled.img`
  width: 12px;
  height: 12px;

  background-color: white;
  border-radius: 50%;
  border: 1px solid #cccccc;

  padding: 6px;
  margin-right: 10px;

  opacity: 0.5;
`;

const MainHeaderMenuProfile = styled.img`
  width: 32px;
  height: 32px;
`;

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <MainHeaderIcon src={fm_logo} />

      <MainHeaderSearchBar>
        <MainHeaderSearchBarIcon src={search_icon} />
        <MainHeaderSearchBarForm>
          <MainHeaderSearchBarInput
            type="text"
            autoFocus
            // value={content}
            placeholder="Search..."
          />
          {/* onChange={handleChange} /> */}
        </MainHeaderSearchBarForm>
      </MainHeaderSearchBar>

      <MainHeaderMenu>
        <MainHeaderMenuIcon src={setting_icon} />
        <MainHeaderMenuProfile src={profile_pic} />
      </MainHeaderMenu>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
