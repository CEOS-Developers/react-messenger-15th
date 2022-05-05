import UserNav from './UserNav';
import { useState } from 'react';
import user from '../data/user.json';
import message from '../data/message.json';
import MessengerInput from './MessengerInput';
import MessageList from './MessageList';

const MessengerBox = () => {
  // 사용자 나부터 시작
  const [currentUser, setCurrentUser] = useState(user[0]);

  //현재 메세지를 보내는 사람이 나일 경우 친구로 유저 변경
  const switchUser = () => {
    currentUser.userId === 'me'
      ? setCurrentUser(user[1])
      : setCurrentUser(user[0]);
  };

  const [textList, setTextList] = useState(message);

  return (
    <div>
      <UserNav currentUser={currentUser} switchUser={switchUser} />
      <MessageList currentUser={currentUser} textList={textList} />
      <MessengerInput
        currentUser={currentUser}
        textList={textList}
        setTextList={setTextList}
      />
    </div>
  );
};

export default MessengerBox;
