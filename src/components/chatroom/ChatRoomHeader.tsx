import { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineLeft } from 'react-icons/ai';

import me from '../../assets/me.json';
import friends from '../../assets/friends.json';

type CharRoomHeaderProps = {
  currentUserId: string;
  setCurrentUserId: (currentUserId: string) => void;
};

export function ChatRoomHeader({
  currentUserId,
  setCurrentUserId,
}: CharRoomHeaderProps) {
  const user = friends.filter((friend) => friend.userId === 'user1')[0]; // [0]: userId
  const [currentUserName, setCurrentUserName] = useState(user.userName);

  const handleToggleUser = () => {
    currentUserId === 'user0'
      ? setCurrentUserId('user1')
      : setCurrentUserId('user0');

    currentUserId === 'user0'
      ? setCurrentUserName(user.userName)
      : setCurrentUserName(me.userName);
  };

  return (
    <ChatRoomHeaderBlock>
      <Button>
        <AiOutlineLeft />
      </Button>

      <ProfileWrapper onClick={handleToggleUser}>
        <Img src={`${process.env.PUBLIC_URL}/imgs/${currentUserId}.jpg`} />
        <TextWrapper>
          <CurrentUserName>{currentUserName}</CurrentUserName>
          <Typing>To</Typing>
        </TextWrapper>
      </ProfileWrapper>

      <Button />
    </ChatRoomHeaderBlock>
  );
}

const ChatRoomHeaderBlock = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  justify-content: 'space-evenly';
`;

const ProfileWrapper = styled.div`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 56%;
  height: 75%;

  display: flex;
  flex-direction: column;
`;

const CurrentUserName = styled.div`
  width: 100%;
  height: 50%;
  font-size: 16px;

  display: flex;
  align-items: center;
`;

const Typing = styled.div`
  width: 100%;
  height: 50%;

  font-size: 12px;
  color: #c8c8c8;
`;

const Button = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
