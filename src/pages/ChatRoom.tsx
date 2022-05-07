import { useReceiverUserIdDispatch } from '../contexts/ReceiverUserIdContext';
import { useState } from 'react';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomList from '../components/chatroom/ChatRoomList';
import ChatRoomForm from '../components/chatroom/ChatRoomForm';
import chats from '../data/chats.json';

function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();
  const receiverUserIdDispatch = useReceiverUserIdDispatch();
  receiverUserIdDispatch({
    type: 'INITIALIZE',
    partnerUserId: tmpPartnerUserId,
  });

  const [receiverUserId, setReceiverUserId] = useState(tmpPartnerUserId);

  const chatsWithPartner = chats.filter(
    (user) => user.userId === tmpPartnerUserId
  )[0].chats;
  const [chatList, setChatList] = useState(chatsWithPartner);

  return (
    <>
      <ChatRoomHeader partnerUserId={tmpPartnerUserId} />
      <ChatRoomList partnerUserId={tmpPartnerUserId} chatList={chatList} />
      <ChatRoomForm
        partnerUserId={tmpPartnerUserId}
        receiverUserId={receiverUserId}
        chatList={chatList}
        setChatList={setChatList}
      />
    </>
  );
}

export default ChatRoom;
