import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useChatListDispatch } from '../contexts/ChatListContext';
import { useReceiverUserIdDispatch } from '../contexts/ReceiverUserIdContext';
import ChatRoomHeader from '../containers/chatroom/ChatRoomHeader';
import ChatRoomList from '../containers/chatroom/ChatRoomList';
import ChatRoomForm from '../containers/chatroom/ChatRoomForm';

function ChatRoom() {
  const params = useParams();
  const partnerUserId = parseInt(params.userId!);

  const receiverUserIdDispatch = useReceiverUserIdDispatch();
  const initReceiverUserId = () => {
    console.log('init');
    receiverUserIdDispatch({
      type: 'INITIALIZE',
      partnerUserId: partnerUserId,
    });
  };
  useEffect(() => {
    initReceiverUserId();
  });

  const chatListDispatch = useChatListDispatch();
  const initChatList = () =>
    chatListDispatch({ type: 'INITIALIZE', partnerUserId: partnerUserId });
  useEffect(() => {
    initChatList();
  });

  return (
    <ChatRoomBlock>
      <ChatRoomHeader partnerUserId={partnerUserId} />
      <ChatRoomList partnerUserId={partnerUserId} />
      <ChatRoomForm partnerUserId={partnerUserId} />
    </ChatRoomBlock>
  );
}

const ChatRoomBlock = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export default ChatRoom;
