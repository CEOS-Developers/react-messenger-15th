import UserNav from '../layout/UserNav';
import { useState } from 'react';
import user from '../../data/user.json';
import message from '../../data/message.json';
import MessengerInput from './MessengerInput';
import MessageList from './MessageList';
import { useParams } from 'react-router-dom';

const MessengerBox = () => {
  // 사용자 나부터 시작
  const otherUser = useParams();
  const userindex = message.findIndex(
    (message) => message.userName === otherUser.userName
  );
  const userMessageData = message[userindex];

  const [currentUser, setCurrentUser] = useState(user[0]);
  const [messageData, setMessageData] = useState(userMessageData.messages);
  return (
    <>
      <UserNav
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        otherUser={otherUser}
      />
      <MessageList messageData={messageData} />

      <MessengerInput
        currentUser={currentUser}
        messageData={messageData}
        setChatList={setMessageData}
      />
    </>
  );
};

export default MessengerBox;
