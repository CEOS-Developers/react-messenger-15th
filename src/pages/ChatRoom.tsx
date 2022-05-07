import { useEffect } from 'react';
import {
  useChatListState,
  useChatListDispatch,
} from '../contexts/ChatListContext';
import {
  useReceiverUserIdState,
  useReceiverUserIdDispatch,
} from '../contexts/ReceiverUserIdContext';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomList from '../components/chatroom/ChatRoomList';
import ChatRoomForm from '../components/chatroom/ChatRoomForm';

function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();
  const receiverUserIdState = useReceiverUserIdState();

  console.log(receiverUserIdState);

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

  console.log(receiverUserIdState);

  const chatListState = useChatListState();

  console.log(chatListState);

  const chatListDispatch = useChatListDispatch();
  const initChatList = () =>
    chatListDispatch({ type: 'INITIALIZE', partnerUserId: tmpPartnerUserId });
  useEffect(() => {
    initChatList();
  }, [tmpPartnerUserId]);

  console.log(chatListState);

  return (
    <>
      <ChatRoomHeader partnerUserId={tmpPartnerUserId} />
      <ChatRoomList partnerUserId={tmpPartnerUserId} />
      <ChatRoomForm partnerUserId={tmpPartnerUserId} />
    </>
  );
}

export default ChatRoom;
