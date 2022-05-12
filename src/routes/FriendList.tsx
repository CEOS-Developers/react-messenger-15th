import styled from 'styled-components';
import user from '../data/user.json';
import Friends from '../components/Friends';
import UnderNavBar from '../components/layout/UnderNavBar';
import { HeaderContains } from '../components/layout/CommonStyle';
import SearchUser from '../components/SearchUser';

const FriendList = () => {
  return (
    <FriendListContainer>
      <HeaderContains>Friends</HeaderContains>
      <Content>
        <SearchUser />
        {user.map(({ userId, userProfile, userName, userStatus }) => (
          <Friends
            key={userId}
            userProfile={userProfile}
            userName={userName}
            userStatus={userStatus}
          />
        ))}
      </Content>
      <UnderNavBar />
    </FriendListContainer>
  );
};

export default FriendList;

const FriendListContainer = styled.div`
  position: absolute;
`;
const Content = styled.div``;
