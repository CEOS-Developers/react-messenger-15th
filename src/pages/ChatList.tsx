import ChatFooter from "components/layout/ChatFooter";
import ChatHeader from "components/layout/ChatHeader";
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
