import Chat from './Chat';

const ChatRoomBody = ({chatList, setChatList}) => {
    return (
    <>
      <section>
        {chatList?.map(({userId,message,msgId}) => (
          <Chat
            key={msgId}
            userId={userId}
            message={message}
            msgId={msgId}
          />
        ))}
      </section>
    </>
  );
};
export default ChatRoomBody;