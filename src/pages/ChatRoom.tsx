import useChatRoom from "hooks/useChatRoom";
import MessageChat from "components/messageChatRoom/MessageChat";
import InputMessageForm from "components/messageInput/InputMessageForm";
import MessageProfileContainer from "components/messageProfile/MessageProfileContainer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const { id } = useParams();
  const { addMessage, handleChatRoom } = useChatRoom();

  useEffect(() => {
    handleChatRoom(Number(id));
  }, []);

  return (
    <>
      <MessageProfileContainer />
      <MessageChat />
      <InputMessageForm sendMessage={addMessage} />
    </>
  );
};

export default ChatRoom;
