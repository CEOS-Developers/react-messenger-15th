import UserNav from '../layout/UserNav';
import { useState } from 'react';
import user from '../../data/user.json';
import message from '../../data/message.json';
import MessengerInput from './MessengerInput';
import MessageList from './MessageList';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { messageDataState } from '../../state/MessageDataState';

const MessengerBox = () => {
  const otherUser = useParams();
  const userindex = message.findIndex(
    (message) => message.userName === otherUser.userName
  );
  const userMessageData = message[userindex];

  const [currentUser, setCurrentUser] = useState(user[0]);
  const [messageData, setMessageData] = useRecoilState(messageDataState);
  setMessageData(userMessageData.messages);
  console.log(messageData);

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
        setMessageData={setMessageData}
      />
    </>
  );
};

export default MessengerBox;
