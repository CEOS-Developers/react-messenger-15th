import ChatFooter from "components/layout/ChatFooter";
import ChatHeader from "components/layout/ChatHeader";
import ChatFriendsList from "components/chatFriends/ChatFriendsList";

const ChatFriends = () => {
  return (
    <>
      <ChatHeader title="Friends" />
      <ChatFriendsList />
      <ChatFooter />
    </>
  );
};

export default ChatFriends;
