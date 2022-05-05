import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

const ChatRoomHeader = ({ currentUserId, setCurrentUserId }) => {
  const userId = 'user1';
  const handleToggleUser = () => {
    currentUserId === 'user0'
      ? setCurrentUserId(userId)
      : setCurrentUserId('user0');
  };

  return (
    <Header>
      <Button>
        <FiChevronLeft />
      </Button>

      <ProfileWrapper onClick={() => handleToggleUser()}>
        <ProfileImg
          src={`${process.env.PUBLIC_URL}/imgs/${currentUserId}.jpg`}
        />
        <TextWrapper>
          <UserName>{currentUserId}</UserName>
          <Typing>Typing...</Typing>
        </TextWrapper>
      </ProfileWrapper>

      <Button />
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justifycontent: space-evenly;
`;

const ProfileWrapper = styled.section`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ChatRoomHeader;
