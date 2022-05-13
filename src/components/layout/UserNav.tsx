import styled from 'styled-components';
import user from '../../data/user.json';
import { LinkToChat } from './CommonStyle';

const UserNav = ({ currentUser, setCurrentUser, otherUser }: any) => {
  const userName = currentUser.userName;
  const userindex = user.findIndex(
    (user) => user.userName === otherUser.userName
  );

  const switchUser = () => {
    currentUser.userId === 'user0'
      ? setCurrentUser(user[userindex])
      : setCurrentUser(user[0]);
  };

  return (
    <UserNavContainer>
      <LinkToChat to={'/chatlist'}>
        <BackToMessageList> 〈 </BackToMessageList>
      </LinkToChat>
      <SwitchButton onClick={switchUser}>
        <ProfileImg src={`/assets/${currentUser.userProfile}`} />
        <ProfileName>{userName}</ProfileName>
        <UserStatus>Typing . . .</UserStatus>
      </SwitchButton>
    </UserNavContainer>
  );
};

export default UserNav;

const BackToMessageList = styled.button`
  font-size: 1rem;
  line-height: 8rem;
  padding-left: 1rem;
`;

const UserNavContainer = styled.div`
  display: flex;
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
  margin: auto;
  padding-right: 2rem;
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
