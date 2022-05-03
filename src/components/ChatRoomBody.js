import styled from 'styled-components';
import Chat from './Chat';
import db from '../db/db.json';

const ChatRoomBody = ({ chatList, setChatList }) => {
  return (
    <>
      {db?.data.map(({ userId, message, msgId }) => (
        <ChatAlign>
          <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
        </ChatAlign>
      ))}
      {chatList?.map(({ userId, message, msgId }) => (
        <ChatAlign>
          <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
        </ChatAlign>
      ))}
    </>
  );
};
export default ChatRoomBody;

const ChatAlign = styled.section``;
