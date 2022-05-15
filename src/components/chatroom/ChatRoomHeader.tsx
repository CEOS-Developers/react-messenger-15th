import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { IChatRoomHeaderProps } from '../Interfaces';
import friends from '../../assets/friends.json';
import me from '../../assets/me.json';

const ChatRoomHeader = ({
  currentUserId,
  setCurrentUserId,
}: IChatRoomHeaderProps) => {
  const { userId } = useParams();
  const [friendObj] = friends.filter((friend) => friend.userId === userId);
  const [currentUserName, setCurrentUserName] = useState(me[0].userName);

  const handleCurrentUserToggle = () => {
    currentUserId === userId
      ? setCurrentUserId(me[0].userId)
      : setCurrentUserId(userId);

    currentUserId === userId
      ? setCurrentUserName(me[0].userName)
      : setCurrentUserName(friendObj.userName);
  };

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <Header>
      <Button>
        <FiChevronLeft onClick={goBack} />
      </Button>

      <ProfileWrapper onClick={handleCurrentUserToggle}>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/imgs/${currentUserId}.jpg`}
        />
        <TextWrapper>
          <UserName>{currentUserName}</UserName>
          <Typing>Typing...</Typing>
        </TextWrapper>
      </ProfileWrapper>
      <Button />
    </Header>
  );
};

const Header = styled.header`
  padding: 5%;
  display: flex;
  justify-content: space-evenly;

  border-bottom: 1px solid #e2e2e2;
`;

const Button = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 6%;
  margin-right: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileWrapper = styled.section`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 56%;
  height: 75%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
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

export default ChatRoomHeader;
