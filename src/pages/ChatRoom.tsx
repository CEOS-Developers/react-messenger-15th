import { useState } from 'react';
import ChatRoomHeader from '../components/chatroom/ChatRoomHeader';
import ChatRoomMain from '../components/chatroom/ChatRoomMain';
import ChatRoomForm from '../components/chatroom/ChatRoomForm';
import { Chats } from '../types/index';
import chats from '../data/chats.json';

function ChatRoom() {
  const tmpPartnerUserId = 1; // const { partnerUserId } = useParams();
  const [receiverUserId, setReceiverUserId] =
    useState<number>(tmpPartnerUserId);
  const ChatsWithPartner = chats.filter(
    (user) => user.userId === tmpPartnerUserId
  )[0].chats;
  const [chatList, setChatList] = useState<Chats>(ChatsWithPartner);

  return (
    <>
      <ChatRoomHeader
        partnerUserId={tmpPartnerUserId}
        receiverUserId={receiverUserId}
        setReceiverUserId={setReceiverUserId}
      />
      <ChatRoomMain partnerUserId={tmpPartnerUserId} chatList={chatList} />
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
