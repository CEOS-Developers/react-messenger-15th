import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Friends = ({ userProfile, userName, userStatus }: any) => {
  return (
    <FriendList>
      <LinkToChat to={`/messengerbox/${userName}`}>
        <ProfileImg src={`/assets/${userProfile}`} />
        <Profile>
          <UserName>{userName}</UserName>
          <UserStatus>{userStatus}</UserStatus>
        </Profile>
      </LinkToChat>
    </FriendList>
  );
};

export default Friends;

const FriendList = styled.div`
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProfileImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 70%;
`;

const UserName = styled.div``;
const UserStatus = styled.div``;

const LinkToChat = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
`;
