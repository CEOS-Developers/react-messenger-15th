import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChatRoomHeader } from '../components/chatroom/ChatRoomHeader';
import { ChatRoomMain } from '../components/chatroom/ChatRoomMain';
import { ChatRoomForm } from '../components/chatroom/ChatRoomForm';

import chats from '../assets/chats.json';

// {
//   "userId": "user1",
//   "chats": [
//     {
//       "userId": "user1",
//       "message": "우리의 색은 gray and blue 엄지손가락으로 말풍선을 띄워",
//       "sentAt": 1644809969387
//     },
//     {
//       "userId": "user0",
//       "message": "띄어쓰기없이보낼게사랑인것같애",
//       "sentAt": 1644809969389
//     },
//     {
//       "userId": "user0",
//       "message": "백만 송이 장미꽃을 나랑 피워 볼래?",
//       "sentAt": 1644809969390
//     },
//     {
//       "userId": "user1",
//       "message": "꽃잎의 색은 우리 마음 가는 대로 칠해 시들 때도 예쁘게",
//       "sentAt": 1644809969391
//     }
//   ]
// },

export function ChatRoom() {
  const [currentUserId, setCurrentUserId] = useState<string>('user1');

  const filteredChats = chats.filter((user) => user.userId === 'user1');
  const [chatList, setChatList] = useState(filteredChats[0]); // [0]: msg

  // const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // useEffect(() => {
  //   scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  // }, [chatList]);

  // scrollRef.current.scrollHeight
  // https://kyounghwan01.github.io/blog/TS/object-null/#%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5

  return (
    <ChatRoomBlock>
      <ChatRoomHeader
        currentUserId={currentUserId}
        setCurrentUserId={setCurrentUserId}
      />
      {/* <ChatRoomMain ref={scrollRef} chatList={chatList} /> */}
      <ChatRoomMain chatList={chatList} />
      <ChatRoomForm
        currentUserId={currentUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </ChatRoomBlock>
  );
}

const ChatRoomBlock = styled.div`
  width: 350px;
  height: 700px;

  border: 1px solid #e2e2e2;

  @media screen and (min-width: 768px) {
    margin-top: 10%;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
`;
