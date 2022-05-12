import { Link } from 'react-router-dom';

import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/sharings/Elements';
import UserList from '../components/sharings/UserList';
import NavBar from '../components/sharings/NavBar';

import friends from '../assets/friends.json';
import chats from '../assets/data.json';

const ChatListScreen = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>

      <Content>
        {friends.map(({ userId, userName }, i) => (
          <Link to={`/ChatRoomScreen/${userId}`}>
            <UserList
              key={userId}
              userId={userId}
              userName={userName}
              message={chats[i].chats[chats[i].chats.length - 1].message}
            />
          </Link>
        ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

export default ChatListScreen;
