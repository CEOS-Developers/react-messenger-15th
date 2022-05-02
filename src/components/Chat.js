const Chat = ({
    userId,
    message,
    msgId,
  }) => {

    return (
        <section userId={userId} msgId={msgId}>
          {message}
        </section>
    );
  };
  
  export default Chat;