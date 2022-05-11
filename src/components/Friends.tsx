import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LinkToChat, ProfileImg } from './layout/CommonStyle';
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
  height: rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div``;
const UserStatus = styled.div``;
