import React, { useState } from 'react';
import styled from 'styled-components';

import icon_search from '../../assets/icon_search.png';
import icon_pinned from '../../assets/icon_pinned.png';
import icon_chatbubble from '../../assets/icon_chatbubble.png';
import icon_send from '../../assets/icon_send.png';

import jh_pic from '../../assets/jh_pic.png';
import cr_pic from '../../assets/cr_pic.png';
import sw_pic from '../../assets/sw_pic.png';
import profile_pic from '../../assets/profile_squared.jpg';

const ChatWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ChatList = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px;
`;

const ChatListTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
`;

const ChatListTitleText = styled.div`
  margin: 24px 0px 16px 20px;

  font-size: 24px;
  font-weight: 800;
  color: #444444;
`;

const ChatListTitleSearchForm = styled.form`
  z-index: 1000 !important;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 82%;
  height: 36px;

  border-radius: 7px;

  background: #f5f5f5;
`;

const ChatListTitleSearchIcon = styled.img`
  width: 12px;
  height: 12px;

  opacity: 0.5;
`;

const ChatListTitleSearchInput = styled.input`
  width: 70%;
  height: 26px;

  margin-left: 4px;
  padding-top: 2px;

  outline: none;
  border-color: transparent;
  background: transparent;

  text-align: left;
  color: #999999;
  font-size: 11px;
  font-weight: 400;
`;

const ChatListContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChatListContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 20px;

  height: 30px;
`;

const ChatListContentHeaderIcon = styled.img`
  width: 11px;
  height: 11px;

  opacity: 0.3;
`;

const ChatListContentHeaderText = styled.div`
  display: flex;

  margin-left: 6px;

  font-size: 10px;
  font-weight: 600;
  color: #999999;
`;

const ChatListItem = styled.div`
  display: flex;

  height: 50px;

  padding: 6px 20px;
`;

const ChatListItemSelected = styled.div`
  display: flex;

  height: 50px;

  padding: 6px 20px;

  background: #fafafa;
`;

const ChatListItemProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 6px;
  width: 50px;
`;

const ChatListItemProfile = styled.img`
  width: 40px;
  height: 40px;
`;

const ChatListItemContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatListItemContentTopWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
`;

const ChatListItemName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333333;
`;

const ChatListItemTime = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #999999;
`;

const ChatListItemContentBottomWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-top: 4px;

  width: 100%;
`;

const ChatListItemRecent = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: #666666;
`;

const ChatContent = styled.div`
  z-index: 1000 !important;

  flex: 1;

  display: flex;
  flex-direction: column;
`;

const ChatContentHeader = styled.div`
  display: flex;

  height: 72px;

  border-left: 1px solid #eeeeee20;
`;

const ChatContentHeaderProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 24px;
`;

const ChatContentHeaderProfile = styled.img`
  width: 46px;
  height: 46px;
`;

const ChatContentHeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 4px;
  margin-left: 16px;
`;

const ChatContentHeaderContentName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333333;

  margin-bottom: 6px;
`;

const ChatContentHeaderContentStatus = styled.div`
  font-size: 11px;
  font-weight: 300;
  color: #999999;

  margin-bottom: 6px;
`;

const ChatContentContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: #fafafa;
`;

const ChatContentItemLeft = styled.div`
  display: flex;
  justify-content: flex-start;

  padding: 20px 0px 0px 24px;

  min-height: 30px;
`;

const ChatContentItemLeftProfileWrapper = styled.div`
  margin-right: 10px;
`;

const ChatContentItemLeftProfile = styled.img`
  height: 32px;
  width: 32px;
`;

const ChatContentItemLeftInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 6px;
`;

const ChatContentItemLeftName = styled.div`
  margin-right: 8px;

  font-size: 12px;
  font-weight: 600;
  color: #444444;
`;

const ChatContentItemLeftTime = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #999999;
`;

const ChatContentItemLeftBubbleWrapper = styled.div``;

const ChatContentItemLeftBubble = styled.div`
  padding: 10px;
  border-radius: 0px 11px 11px 11px;

  max-width: 100px;

  text-align: left;
  font-size: 10px;
  font-weight: 300;
  color: #333333;

  background: #f0f0f0;
`;

const ChatContentItemRight = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 20px 24px 0px 0px;

  min-height: 30px;
`;

const ChatContentItemRightProfileWrapper = styled.div`
  margin-left: 10px;
`;

const ChatContentItemRightProfile = styled.img`
  height: 32px;
  width: 32px;

  border-radius: 50%;
`;

const ChatContentItemRightInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-bottom: 6px;
`;

const ChatContentItemRightName = styled.div`
  margin-left: 8px;

  font-size: 12px;
  font-weight: 600;
  color: #444444;
`;

const ChatContentItemRightTime = styled.div`
  font-size: 10px;
  font-weight: 300;
  color: #999999;
`;

const ChatContentItemRightBubbleWrapper = styled.div``;

const ChatContentItemRightBubble = styled.div`
  padding: 10px;
  margin-bottom: 4px;

  border-radius: 11px 0px 11px 11px;

  text-align: right;
  font-size: 10px;
  font-weight: 300;
  color: #333333;

  background: #f0f0f0;
`;

const ChatFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 100%;
  height: 60px;

  border-left: 1px solid #eeeeee20;
`;

const ChatInputForm = styled.form`
  z-index: 1000 !important;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 92%;
  height: 36px;

  border-radius: 7px;

  background: #f5f5f5;
`;

const ChatInputFormIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const ChatInput = styled.input`
  width: 90%;
  height: 14px;

  margin-right: 14px;
  padding-top: 2px;

  outline: none;
  border-color: transparent;
  background: transparent;

  border-right: 1px solid #dddddd;

  text-align: left;
  color: #666666;
  font-size: 10px;
  font-weight: 400;
`;

const Chat = () => {
  return (
    <ChatWrapper>
      <ChatList>
        <ChatListTitleContainer>
          <ChatListTitleText>Chats</ChatListTitleText>
          <ChatListTitleSearchForm>
            <ChatListTitleSearchIcon src={icon_search} />
            <ChatListTitleSearchInput type="text" placeholder="Search..." />
          </ChatListTitleSearchForm>
        </ChatListTitleContainer>

        <ChatListContentContainer>
          {/* <ChatListContentHeader>
            <ChatListContentHeaderIcon src={icon_pinned} />
            <ChatListContentHeaderText>PINNED</ChatListContentHeaderText>
          </ChatListContentHeader> */}
          <ChatListContentHeader>
            <ChatListContentHeaderIcon src={icon_chatbubble} />
            <ChatListContentHeaderText>ALL MESSAGE</ChatListContentHeaderText>
          </ChatListContentHeader>

          <ChatListItem>
            <ChatListItemProfileWrapper>
              <ChatListItemProfile src={jh_pic} />
            </ChatListItemProfileWrapper>
            <ChatListItemContentWrapper>
              <ChatListItemContentTopWrapper>
                <ChatListItemName>김주현</ChatListItemName>
                <ChatListItemTime>12:03 AM</ChatListItemTime>
              </ChatListItemContentTopWrapper>
              <ChatListItemContentBottomWrapper>
                <ChatListItemRecent>최근 대화 내용</ChatListItemRecent>
              </ChatListItemContentBottomWrapper>
            </ChatListItemContentWrapper>
          </ChatListItem>

          {/* <ChatListContentHeader>
            <ChatListContentHeaderIcon src={icon_chatbubble} />
            <ChatListContentHeaderText>ALL MESSAGE</ChatListContentHeaderText>
          </ChatListContentHeader> */}

          <ChatListItem>
            <ChatListItemProfileWrapper>
              <ChatListItemProfile src={cr_pic} />
            </ChatListItemProfileWrapper>
            <ChatListItemContentWrapper>
              <ChatListItemContentTopWrapper>
                <ChatListItemName>김채림</ChatListItemName>
                <ChatListItemTime>11:58 PM</ChatListItemTime>
              </ChatListItemContentTopWrapper>
              <ChatListItemContentBottomWrapper>
                <ChatListItemRecent>최근 대화 내용</ChatListItemRecent>
              </ChatListItemContentBottomWrapper>
            </ChatListItemContentWrapper>
          </ChatListItem>

          <ChatListItemSelected>
            <ChatListItemProfileWrapper>
              <ChatListItemProfile src={sw_pic} />
            </ChatListItemProfileWrapper>
            <ChatListItemContentWrapper>
              <ChatListItemContentTopWrapper>
                <ChatListItemName>전시원형</ChatListItemName>
                <ChatListItemTime>11:28 PM</ChatListItemTime>
              </ChatListItemContentTopWrapper>
              <ChatListItemContentBottomWrapper>
                <ChatListItemRecent>최근 대화 내용</ChatListItemRecent>
              </ChatListItemContentBottomWrapper>
            </ChatListItemContentWrapper>
          </ChatListItemSelected>
        </ChatListContentContainer>
      </ChatList>

      <ChatContent>
        <ChatContentHeader>
          <ChatContentHeaderProfileWrapper>
            <ChatContentHeaderProfile src={sw_pic} />
          </ChatContentHeaderProfileWrapper>
          <ChatContentHeaderContentWrapper>
            <ChatContentHeaderContentName>
              전시원형
            </ChatContentHeaderContentName>
            <ChatContentHeaderContentStatus>
              상태 메시지
            </ChatContentHeaderContentStatus>
          </ChatContentHeaderContentWrapper>
        </ChatContentHeader>

        <ChatContentContainer>
          <ChatContentItemLeft>
            <ChatContentItemLeftProfileWrapper>
              <ChatContentItemLeftProfile src={sw_pic} />
            </ChatContentItemLeftProfileWrapper>
            <ChatContentItemLeftBubbleWrapper>
              <ChatContentItemLeftInfoWrapper>
                <ChatContentItemLeftName>전시원형</ChatContentItemLeftName>
                <ChatContentItemLeftTime>11:57 PM</ChatContentItemLeftTime>
              </ChatContentItemLeftInfoWrapper>
              <ChatContentItemLeftBubble>말풍선</ChatContentItemLeftBubble>
            </ChatContentItemLeftBubbleWrapper>
          </ChatContentItemLeft>

          <ChatContentItemLeft>
            <ChatContentItemLeftProfileWrapper>
              <ChatContentItemLeftProfile src={sw_pic} />
            </ChatContentItemLeftProfileWrapper>
            <ChatContentItemLeftBubbleWrapper>
              <ChatContentItemLeftInfoWrapper>
                <ChatContentItemLeftName>전시원형</ChatContentItemLeftName>
                <ChatContentItemLeftTime>11:57 PM</ChatContentItemLeftTime>
              </ChatContentItemLeftInfoWrapper>
              <ChatContentItemLeftBubble>긴 말풍선</ChatContentItemLeftBubble>
            </ChatContentItemLeftBubbleWrapper>
          </ChatContentItemLeft>

          <ChatContentItemLeft>
            <ChatContentItemLeftProfileWrapper>
              <ChatContentItemLeftProfile src={sw_pic} />
            </ChatContentItemLeftProfileWrapper>
            <ChatContentItemLeftBubbleWrapper>
              <ChatContentItemLeftInfoWrapper>
                <ChatContentItemLeftName>전시원형</ChatContentItemLeftName>
                <ChatContentItemLeftTime>11:57 PM</ChatContentItemLeftTime>
              </ChatContentItemLeftInfoWrapper>
              <ChatContentItemLeftBubble>
                매우 긴 말풍선
              </ChatContentItemLeftBubble>
            </ChatContentItemLeftBubbleWrapper>
          </ChatContentItemLeft>

          <ChatContentItemRight>
            <ChatContentItemRightBubbleWrapper>
              <ChatContentItemRightInfoWrapper>
                <ChatContentItemRightTime>11:57 PM</ChatContentItemRightTime>
                <ChatContentItemRightName>최어진</ChatContentItemRightName>
              </ChatContentItemRightInfoWrapper>
              <ChatContentItemRightBubble>내 말풍선</ChatContentItemRightBubble>
            </ChatContentItemRightBubbleWrapper>
            <ChatContentItemRightProfileWrapper>
              <ChatContentItemRightProfile src={profile_pic} />
            </ChatContentItemRightProfileWrapper>
          </ChatContentItemRight>
        </ChatContentContainer>

        <ChatFooter>
          <ChatInputForm>
            <ChatInput type="text" placeholder="Your messages..." />
            <ChatInputFormIcon src={icon_send} />
          </ChatInputForm>
        </ChatFooter>
      </ChatContent>
    </ChatWrapper>
  );
};

export default Chat;
