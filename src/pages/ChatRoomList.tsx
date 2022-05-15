import styled from 'styled-components';
import ChatRoomItem from '../components/ChatRoomItem';
import { IFriend } from '../types';

import chatsData from '../assets/json/chatsData.json';
import friendsData from '../assets/json/friendsData.json';

function ChatRoomList() {
  // Sort 'friends' in desc order by last send/receive time.
  const friendsDataCopy = friendsData.filter(() => true);
  friendsDataCopy.sort((a: IFriend, b: IFriend) => {
    let lastTimeOfA =
      chatsData[a.userId - 1].data[chatsData[a.userId - 1].data.length - 1]
        .unixTime;
    let lastTimeOfB =
      chatsData[b.userId - 1].data[chatsData[b.userId - 1].data.length - 1]
        .unixTime;
    if (lastTimeOfA < lastTimeOfB) return 1;
    if (lastTimeOfA > lastTimeOfB) return -1;
    return 0;
  });

  function getLastMsg(i: number) {
    return chatsData[i].data[chatsData[i].data.length - 1].msg;
  }

  return (
    <ChatRoomListBlock>
      {friendsDataCopy.map(({ userId, userName }, i) => (
        <ChatRoomItem
          key={userId}
          userId={userId}
          userName={userName}
          lastMsg={getLastMsg(i)}
        />
      ))}
    </ChatRoomListBlock>
  );
}

export default ChatRoomList;

const ChatRoomListBlock = styled.section`
  width: 100%;
  height: 100%;

  margin-top: 4%;
  border-top: 1px solid #e2e2e2;
`;
