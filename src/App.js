import { useState} from 'react';
import InputForm from './components/InputForm';
import ChatRoomBody from './components/ChatRoomBody';


function App() {
  const [chatList, setChatList] = useState([]);
  const userId = 'user1';
  const [currentUserId, setCurrentUserId] = useState(userId);

  return (
    <>
    <ChatRoomBody chatList={chatList} setChatList={setChatList}/>
    <InputForm currentUserId={currentUserId} chatList={chatList} setChatList={setChatList} />
    </>
  );
}

export default App;
