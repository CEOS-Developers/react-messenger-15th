import useChatRoom from "hooks/useChatRoom";
import MessageChat from "components/messageChatRoom/MessageChat";
import InputMessageForm from "components/messageInput/InputMessageForm";
import MessageProfileContainer from "components/messageProfile/MessageProfileContainer";

const ChatRoom = () => {
  const { addMessage, handleChatRoom } = useChatRoom();

  return (
    <>
      <MessageProfileContainer />
      <MessageChat handleChatRoom={handleChatRoom} />
      <InputMessageForm sendMessage={addMessage} />
    </>
  );
};

export default ChatRoom;
