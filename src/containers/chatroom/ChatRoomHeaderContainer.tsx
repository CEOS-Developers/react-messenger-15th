import React from 'react';
import { RootState } from '../../modules';
import { useCallback } from 'react';
import { toggleReceiver } from '../../modules/receiver';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import friendsData from '../../assets/json/friendsData.json';
import meData from '../../assets/json/meData.json';

type TProps = {
  partnerUserId: number;
};

function ChatRoomHeaderContainer({ partnerUserId }: TProps) {
  const receiverState = useSelector(({ receiver }: RootState) => ({
    userId: receiver.userId,
  }));

  const dispatch = useDispatch();
  const handleReceiverToggle = useCallback(
    (partnerUserId: number) => dispatch(toggleReceiver(partnerUserId)),
    [dispatch]
  );

  let receiver;
  if (receiverState.userId === meData.userId) {
    receiver = meData;
  } else {
    receiver = friendsData.filter(
      (friend) => friend.userId === receiverState.userId
    )[0];
  }

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <ChatRoomHeaderContainerBlock>
      <GoBackBtn onClick={goBack}>
        <HiOutlineChevronLeft />
      </GoBackBtn>
      <ProfileWrapper onClick={() => handleReceiverToggle(partnerUserId)}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/${receiverState.userId}.jpg`}
          alt='profile'
        />
        <ReceiverUserNameWrapper>
          <span>{receiver.userName}</span>
          <HiOutlineChevronRight />
        </ReceiverUserNameWrapper>
      </ProfileWrapper>
      <GoBackBtn /> {/* Dummy */}
    </ChatRoomHeaderContainerBlock>
  );
}

const ChatRoomHeaderContainerBlock = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: -5%;
  border-bottom: 1px solid #e2e2e2;
`;

const GoBackBtn = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 1%;
  margin-left: 3%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.8rem;
    color: #1986fc;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ProfileWrapper = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ReceiverUserNameWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 10%;
    margin-right: 2px;

    font-size: 0.8rem;
    font-weight: 400;
    color: #3f464db2;

    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 10%;
    color: #9f9fa3bd;
  }
`;

export default React.memo(ChatRoomHeaderContainer);
