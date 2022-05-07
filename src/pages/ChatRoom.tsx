import { useEffect } from 'react';
import { useChatListDispatch } from '../contexts/ChatListContext';
import { useReceiverUserIdDispatch } from '../contexts/ReceiverUserIdContext';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomList from '../components/chatroom/ChatRoomList';
import ChatRoomForm from '../components/chatroom/ChatRoomForm';

function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();

  const receiverUserIdDispatch = useReceiverUserIdDispatch();
  const initReceiverUserId = () => {
    receiverUserIdDispatch({
      type: 'INITIALIZE',
      partnerUserId: tmpPartnerUserId,
    });
  };
  useEffect(() => {
    initReceiverUserId();
  }, [tmpPartnerUserId]);

  const chatListDispatch = useChatListDispatch();
  const initChatList = () =>
    chatListDispatch({ type: 'INITIALIZE', partnerUserId: tmpPartnerUserId });
  useEffect(() => {
    initChatList();
  }, [tmpPartnerUserId]);

  return (
    <>
      <ChatRoomHeader partnerUserId={tmpPartnerUserId} />
      <ChatRoomList partnerUserId={tmpPartnerUserId} />
      <ChatRoomForm partnerUserId={tmpPartnerUserId} />
    </>
  );
}

export default ChatRoom;
