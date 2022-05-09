import message from "data/message.json";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";

const MessageChatList = () => {
  return (
    <Container>
      {message.map((msg) => (
        <ChatListItem key={msg.user.id} msgInfo={msg} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 67%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background-clip: padding-box;
    border: 5px solid transparent;
  }
  border-bottom: 1px solid lightgrey;
`;

export default MessageChatList;
