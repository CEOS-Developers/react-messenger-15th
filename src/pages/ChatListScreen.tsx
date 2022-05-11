import { Link } from 'react-router-dom';
import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/sharings/Elements';
import UserList from '../components/sharings/UserList';

import friends from '../assets/friends.json';
import chats from '../assets/data.json';

const ChatListScreen = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>

      <Content>
        <Link to="/ChatRoomScreen/:userId">
          {friends.map(({ userId, userName }, i) => (
            <UserList
              key={userId}
              userId={userId}
              userName={userName}
              message={chats[i].chats[chats[i].chats.length - 1].message}
            />
          ))}
        </Link>
      </Content>
    </Wrapper>
  );
};

export default ChatListScreen;
