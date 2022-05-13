import styled from 'styled-components';
import ChatRoomItem from '../components/ChatRoomItem';
import { IFriend } from '../types/index';

import chatsData from '../assets/json/chatsData.json';
import friendsData from '../assets/json/friendsData.json';

function ChatList() {
  // Sort in desc order by last send/receive time
  const tempFriends = friendsData.filter(() => true); // duplicate
  tempFriends.sort((a: IFriend, b: IFriend) => {
    let tempA =
      chatsData[a.userId - 1].data[chatsData[a.userId - 1].data.length - 1]
        .unixTime;
    let tempB =
      chatsData[b.userId - 1].data[chatsData[b.userId - 1].data.length - 1]
        .unixTime;
    if (tempA < tempB) return 1;
    if (tempA > tempB) return -1;
    return 0;
  });

  function getLastMsg(i: number) {
    return chatsData[i].data[chatsData[i].data.length - 1].msg;
  }

  return (
    <ChatListBlock>
      {tempFriends.map(({ userId, userName }, i) => (
        <ChatRoomItem
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
