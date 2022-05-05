import styled from 'styled-components';
import Chat from './Chat';
import db from '../db/db.json';

const ChatRoomBody = ({ chatList, setChatList }) => {
  return (
    <>
      {db?.data.map(({ userId, message, msgId }) => (
        <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
      ))}
      {chatList?.map(({ userId, message, msgId }) => (
        <Chat key={msgId} userId={userId} message={message} msgId={msgId} />
      ))}
    </>
  );
};
export default ChatRoomBody;
