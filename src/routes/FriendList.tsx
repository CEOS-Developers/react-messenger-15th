import styled from 'styled-components';
import UserNav from '../components/UserNav';
import user from '../data/user.json';
import Friends from '../components/Friends';

const FriendList = () => {
  return (
    <FriendListContainer>
      <Header>Friends</Header>
      <Content>
        {user.map(({ userId, userProfile, userName, userStatus }) => (
          <Friends
            key={userId}
            userProfile={userProfile}
            userName={userName}
            userStatus={userStatus}
          />
        ))}
      </Content>
    </FriendListContainer>
  );
};

export default FriendList;

const FriendListContainer = styled.div``;
const Header = styled.div``;
const Content = styled.div``;
