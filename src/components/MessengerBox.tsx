import UserNav from './UserNav';
import { useState } from 'react';
import user from '../data/user.json';
import message from '../data/message.json';
import MessengerInput from './MessengerInput';
import MessageList from './MessageList';
import { IChat } from '../interface/interface';

const MessengerBox = () => {
  // 사용자 나부터 시작
  const [currentUser, setCurrentUser] = useState(user[0]);

  //현재 메세지를 보내는 사람이 나일 경우 친구로 유저 변경
  const switchUser = () => {
    currentUser.userId === 'me'
      ? setCurrentUser(user[1])
      : setCurrentUser(user[0]);
  };

  const [chatList, setChatList] = useState(message);

  return (
    <div>
      <UserNav currentUser={currentUser} switchUser={switchUser} />
      <MessageList chatList={chatList} />
      <MessengerInput
        currentUser={currentUser}
        chatList={chatList}
        setChatList={setChatList}
      ></MessengerInput>
    </div>
  );
};

export default MessengerBox;
