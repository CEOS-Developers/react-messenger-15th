import ChatFooter from "components/ChatFooter";
import ChatHeader from "components/ChatHeader";
import MessageChatList from "components/chatList/MessageChatList";

const ChatList = () => {
  return (
    <>
      <ChatHeader title="Messages" />
      <MessageChatList />
      <ChatFooter />
    </>
  );
};

export default ChatList;
