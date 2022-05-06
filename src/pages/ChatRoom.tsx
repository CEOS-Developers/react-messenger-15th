import { useState } from 'react';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomList from '../components/chatroom/ChatRoomList';
import ChatRoomForm from '../components/chatroom/ChatRoomForm';
import { Chats } from '../types/index';
import chats from '../data/chats.json';

function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();
  const [receiverUserId, setReceiverUserId] =
    useState<number>(tmpPartnerUserId);
  const chatsWithPartner = chats.filter(
    (user) => user.userId === tmpPartnerUserId
  )[0].chats;
  const [chatList, setChatList] = useState<Chats>(chatsWithPartner);

  return (
    <>
      <ChatRoomHeader
        partnerUserId={tmpPartnerUserId}
        receiverUserId={receiverUserId}
        setReceiverUserId={setReceiverUserId}
      />
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
