import useMessage from "hooks/useMessage";
import MessageChat from "components/messageChatRoom/MessageChat";
import InputMessageForm from "components/messageInput/InputMessageForm";
import MessageProfileContainer from "components/messageProfile/MessageProfileContainer";

const ChatRoom = () => {
  const { messages, addMessage } = useMessage();

  return (
    <>
      <MessageProfileContainer />
      <MessageChat messages={messages} />
      <InputMessageForm sendMessage={addMessage} />
    </>
  );
};

export default ChatRoom;
