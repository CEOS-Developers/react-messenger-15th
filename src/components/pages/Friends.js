import React from 'react';
import styled from 'styled-components';

import icon_search from '../../assets/icon_search.png';
import icon_me from '../../assets/icon_me.png';
import icon_friends from '../../assets/icon_friends.png';

import img_newchat from '../../assets/img_newchat.png';

import jh_pic from '../../assets/jh_pic.jpg';
import cr_pic from '../../assets/cr_pic.png';
import sw_pic from '../../assets/sw_pic.jpg';
import profile_pic from '../../assets/profile_squared.jpg';

const FriendsWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px;

  box-shadow: 0 1rem 4rem hsl(0 0% 0% / 5%);
`;

const FriendsListTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
`;

const FriendsListTitleText = styled.div`
  margin: 24px 0px 16px 20px;

  font-size: 24px;
  font-weight: 800;
  color: #444444;
`;

const FriendsListTitleSearchForm = styled.form`
  z-index: 1000 !important;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 82%;
  height: 36px;

  border-radius: 7px;

  background: #f5f5f5;
  transition: all 0.3s;

  &:hover {
    background: #e5e5e5;
  }
`;

const FriendsListTitleSearchIcon = styled.img`
  width: 12px;
  height: 12px;

  opacity: 0.5;
`;

const FriendsListTitleSearchInput = styled.input`
  width: 70%;
  height: 26px;

  margin-left: 4px;
  padding-top: 2px;

  outline: none;
  border-color: transparent;
  background: transparent;

  text-align: left;
  color: #666666;
  font-size: 11px;
  font-weight: 400;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #999999;
  }
  :-ms-input-placeholder {
    color: #999999;
  }
`;

const FriendsListContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FriendsListContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 20px;

  height: 30px;
`;

const FriendsListContentHeaderIcon = styled.img`
  width: 11px;
  height: 11px;

  opacity: 0.3;
`;

const FriendsListContentHeaderText = styled.div`
  display: flex;

  margin-left: 6px;

  font-size: 10px;
  font-weight: 600;
  color: #999999;
`;

const FriendsListItem = styled.div`
  display: flex;

  height: 50px;

  padding: 6px 20px;

  background: white;
  transition: all 0.3s;

  &:hover {
    background: #fafafa;
  }
`;

const FriendsListItemProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 6px;
  width: 50px;
`;

const FriendsListItemProfile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 14px;
`;

const FriendsListItemContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FriendsListItemContentTopWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;

const FriendsListItemName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333333;
`;

const FriendsListItemContentBottomWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 4px;

  width: 100%;
`;

const FriendsListItemStatus = styled.div`
  font-size: 11px;
  font-weight: 200;
  color: #666666;
`;

const FriendsContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fafafa;
`;

const FriendsContentImg = styled.img`
  width: 180px;
  height: auto;

  border-radius: 18px;

  opacity: 1;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const FriendsContentText = styled.div`
  margin-top: 42px;

  font-size: 12px;
  font-weight: 400;
  color: #666666;
`;

const Friends = () => {
  return (
    <FriendsWrapper>
      <FriendsList>
        <FriendsListTitleContainer>
          <FriendsListTitleText>Friends</FriendsListTitleText>
          <FriendsListTitleSearchForm>
            <FriendsListTitleSearchIcon src={icon_search} />
            <FriendsListTitleSearchInput type="text" placeholder="Search..." />
          </FriendsListTitleSearchForm>
        </FriendsListTitleContainer>

        <FriendsListContentContainer>
          <FriendsListContentHeader>
            <FriendsListContentHeaderIcon src={icon_me} />
            <FriendsListContentHeaderText>
              MY PROFILE
            </FriendsListContentHeaderText>
          </FriendsListContentHeader>

          <FriendsListItem>
            <FriendsListItemProfileWrapper>
              <FriendsListItemProfile src={profile_pic} />
            </FriendsListItemProfileWrapper>
            <FriendsListItemContentWrapper>
              <FriendsListItemContentTopWrapper>
                <FriendsListItemName>최어진</FriendsListItemName>
              </FriendsListItemContentTopWrapper>
              <FriendsListItemContentBottomWrapper>
                <FriendsListItemStatus>ㅠ</FriendsListItemStatus>
              </FriendsListItemContentBottomWrapper>
            </FriendsListItemContentWrapper>
          </FriendsListItem>

          <FriendsListContentHeader>
            <FriendsListContentHeaderIcon src={icon_friends} />
            <FriendsListContentHeaderText>FRIENDS</FriendsListContentHeaderText>
          </FriendsListContentHeader>

          <FriendsListItem>
            <FriendsListItemProfileWrapper>
              <FriendsListItemProfile src={jh_pic} />
            </FriendsListItemProfileWrapper>
            <FriendsListItemContentWrapper>
              <FriendsListItemContentTopWrapper>
                <FriendsListItemName>김주현</FriendsListItemName>
              </FriendsListItemContentTopWrapper>
              <FriendsListItemContentBottomWrapper>
                <FriendsListItemStatus>상태 메시지</FriendsListItemStatus>
              </FriendsListItemContentBottomWrapper>
            </FriendsListItemContentWrapper>
          </FriendsListItem>

          <FriendsListItem>
            <FriendsListItemProfileWrapper>
              <FriendsListItemProfile src={cr_pic} />
            </FriendsListItemProfileWrapper>
            <FriendsListItemContentWrapper>
              <FriendsListItemContentTopWrapper>
                <FriendsListItemName>김채림</FriendsListItemName>
              </FriendsListItemContentTopWrapper>
              <FriendsListItemContentBottomWrapper>
                <FriendsListItemStatus>상태 메시지</FriendsListItemStatus>
              </FriendsListItemContentBottomWrapper>
            </FriendsListItemContentWrapper>
          </FriendsListItem>

          <FriendsListItem>
            <FriendsListItemProfileWrapper>
              <FriendsListItemProfile src={sw_pic} />
            </FriendsListItemProfileWrapper>
            <FriendsListItemContentWrapper>
              <FriendsListItemContentTopWrapper>
                <FriendsListItemName>전시원형</FriendsListItemName>
              </FriendsListItemContentTopWrapper>
              <FriendsListItemContentBottomWrapper>
                <FriendsListItemStatus>상태 메시지</FriendsListItemStatus>
              </FriendsListItemContentBottomWrapper>
            </FriendsListItemContentWrapper>
          </FriendsListItem>
        </FriendsListContentContainer>
      </FriendsList>

      <FriendsContent>
        <FriendsContentImg src={img_newchat} />
        <FriendsContentText>
          친구들이 당신의 <strong>새로운 메시지</strong>💬를 기다리고 있어요!
        </FriendsContentText>
      </FriendsContent>
    </FriendsWrapper>
  );
};

export default Friends;
