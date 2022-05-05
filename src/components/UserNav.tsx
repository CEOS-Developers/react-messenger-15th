import styled from 'styled-components';
import { IUserNavProps } from '../interface/interface';

const UserNav = ({ currentUser, switchUser }: IUserNavProps) => {
  const userName = currentUser.userName;
  console.log(userName);
  console.log(currentUser.userProfile);

  return (
    <>
      <SwitchButton onClick={switchUser}>
        <ProfileImg src={`/assets/${currentUser.userProfile}`} />
        <ProfileName>{userName}</ProfileName>
        <UserStatus>Typing . . .</UserStatus>
      </SwitchButton>
    </>
  );
};

const SwitchButton = styled.button`
  background-color: transparent;
`;
const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 70%;
`;
const ProfileName = styled.div``;
const UserStatus = styled.div`
  color: #c4c3c3;
`;

export default UserNav;
