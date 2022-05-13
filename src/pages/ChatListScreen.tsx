import { Link } from 'react-router-dom';

import { Content } from '../components/sharings/Elements';
import UserList from '../components/sharings/UserList';

import friends from '../assets/friends.json';
import chats from '../assets/data.json';

const ChatListScreen = () => {
  return (
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
  );
};

export default ChatListScreen;
