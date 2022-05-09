import List from "components/layout/List";
import message from "data/message.json";
import styled from "styled-components";

const MessageChatList = () => {
  return (
    <Container>
      {message.map((msg) => (
        <List
          key={msg.user.id}
          link={msg.user.id}
          img={msg.user.name}
          title={msg.user.name}
          subTitle={msg.messages[msg.messages.length - 1].text}
        />
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
