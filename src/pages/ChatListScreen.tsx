import {
  Content,
  Header,
  HeaderTitle,
  Wrapper,
} from '../components/sharings/Elements';
import UserList from '../components/sharings/UserList';

import friends from '../db/friends.json';
import chats from '../db/data.json';

const ChatListScreen = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>
      <Content>
        {friends.map(({ userId, userName }, i) => (
          <UserList
            key={userId}
            userId={userId}
            userName={userName}
            message={chats[i].chats[chats[i].chats.length - 1].message}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default ChatListScreen;
