import { useState } from 'react';
import ChatRoomScreen from './components/ChatRoomScreen';

function App() {
  const [chatList, setChatList] = useState([]);
  const userId = 'user1';
  const [currentUserId, setCurrentUserId] = useState(userId);

  return (
    <>
      <ChatRoomScreen />
    </>
  );
}

export default App;
