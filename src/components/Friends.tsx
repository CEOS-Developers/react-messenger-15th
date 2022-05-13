import styled from 'styled-components';
import {
  LinkToChat,
  ListItem,
  ProfileImg,
  UserName,
} from './layout/CommonStyle';
const Friends = ({ userProfile, userName, userStatus }: any) => {
  return (
    <FriendList>
      <LinkToChat to={`/messengerbox/${userName}`}>
        <ProfileImg src={`/assets/${userProfile}`} />
        <ListItem>
          <UserName>{userName}</UserName>
          <UserStatus>{userStatus}</UserStatus>
        </ListItem>
      </LinkToChat>
    </FriendList>
  );
};

export default Friends;

const FriendList = styled.div`
  display: flex;
  padding-left: 1rem;
  margin: 0.5rem;
`;

const UserStatus = styled.div`
  font-weight: lighter;
  font-size: 14px;
`;
