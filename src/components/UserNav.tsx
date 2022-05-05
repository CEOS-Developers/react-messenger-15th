import styled from 'styled-components';
import { IUserNavProps } from '../interface/interface';

const UserNav = ({ currentUser, switchUser }: IUserNavProps) => {
  const userName = currentUser.userName;
  console.log(userName);
  console.log(currentUser.userProfile);

  return (
    <UserNavContainer>
      <ChangeUserButton onClick={switchUser}> 〈 </ChangeUserButton>
      <SwitchButton onClick={switchUser}>
        <ProfileImg src={`/assets/${currentUser.userProfile}`} />
        <ProfileName>{userName}</ProfileName>
        <UserStatus>Typing . . .</UserStatus>
      </SwitchButton>
    </UserNavContainer>
  );
};

export default UserNav;

const ChangeUserButton = styled.button`
  font-size: 1rem;
`;

const UserNavContainer = styled.div`
  border-bottom-style: solid;
  border-color: #c2bbbb;
  border-width: 0.08rem;
  text-align: center;
  margin: 0 auto;
  padding-top: 1rem;
  height: 8rem;
`;

const SwitchButton = styled.button`
  background-color: transparent;
`;
const ProfileImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 70%;
`;
const ProfileName = styled.div`
  font-size: 1rem;
`;
const UserStatus = styled.div`
  color: #c4c3c3;
  font-size: 0.85rem;
`;
