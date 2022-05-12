import styled from 'styled-components';
import ChatListItem from '../components/ChatListItem';
import { IFriend } from '../types/index';

import chats from '../assets/json/chats.json';
import friends from '../assets/json/friends.json';

function ChatList() {
  // order by Last message sent time desc
  const tempFriends = friends.filter(() => true);
  tempFriends.sort((a: IFriend, b: IFriend) => {
    let tempA =
      chats[a.userId - 1].data[chats[a.userId - 1].data.length - 1].unixTime;
    let tempB =
      chats[b.userId - 1].data[chats[b.userId - 1].data.length - 1].unixTime;
    if (tempA < tempB) return 1;
    if (tempA > tempB) return -1;
    return 0;
  });

  function getLastMsg(i: number) {
    return chats[i].data[chats[i].data.length - 1].msg;
  }

  return (
    <ChatListBlock>
      {tempFriends.map(({ userId, userName }, i) => (
        <ChatListItem
          key={userId}
          userId={userId}
          userName={userName}
          lastMsg={getLastMsg(i)}
        />
      ))}
    </ChatListBlock>
  );
}

const ChatListBlock = styled.section`
  width: 100%;
  height: 100%;

  margin-top: 4%;
  border-top: 1px solid #e2e2e2;
`;

export default ChatList;
