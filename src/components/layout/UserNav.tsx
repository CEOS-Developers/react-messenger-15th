import styled from 'styled-components';
import user from '../../data/user.json';
import { LinkToChat } from './CommonStyle';

const UserNav = ({ currentUser, setCurrentUser, otherUser }: any) => {
  const userName = currentUser.userName;

  //현재 메세지를 보내는 사람이 나일 경우 친구로 유저 변경
  //chatList.userId->로 배열 찾는 방법..
  console.log(otherUser);
  const userindex = user.findIndex(
    (user) => user.userName === otherUser.userName
  );
  console.log(userindex);
  const switchUser = () => {
    currentUser.userId === 'user0'
      ? setCurrentUser(user[userindex])
      : setCurrentUser(user[0]);
  };

  return (
    <UserNavContainer>
      <LinkToChat to={'/chatlist'}>
        <ChangeUserButton> 〈 </ChangeUserButton>
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
