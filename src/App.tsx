import styled from 'styled-components';
import { ChatRoomHeader } from './components/chatroom/ChatRoomHeader';
import { ChatRoomMain } from './components/chatroom/ChatRoomMain';
import { ChatRoomForm } from './components/chatroom/ChatRoomForm';

export function App() {
  return (
    <>
      <Screen>
        <ChatRoomHeader />
        <ChatRoomMain />
        <ChatRoomForm />
      </Screen>
    </>
  );
}

const Screen = styled.div`
  width: 360px;
  height: 600px;
  margin-top: 80px;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 0 25px rgba(105, 85, 85, 0.5);
`;
