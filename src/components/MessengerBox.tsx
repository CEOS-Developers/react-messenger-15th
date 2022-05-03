import MessengerInput from './Messengerinput';
import UserNav from './UserNav';
import { useState } from 'react';
import user from '../data/user.json';
import message from '../data/message.json';

const MessengerBox = () => {
  // 사용자 나부터 시작
  const [currentUser, setCurrentUser] = useState(user[0]);

  //현재 메세지를 보내는 사람이 나일 경우 친구로 유저 변경
  const switchUser = () => {
    currentUser.userId === 'me'
      ? setCurrentUser(user[1])
      : setCurrentUser(user[0]);
  };

  const [text, setText] = useState(message);
  return (
    <div>
      <UserNav currentUser={currentUser} switchUser={switchUser} />
      <MessengerList text={text}></MessengerList>
      <MessengerInput />
    </div>
  );
};

export default MessengerBox;
