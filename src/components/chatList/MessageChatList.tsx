import List from "components/layout/List";
import message from "data/message.json";
import styled from "styled-components";
import { useState } from "react";
import Search from "components/common/Search";

const MessageChatList = () => {
  const totalMessage = message;
  const [showMessage, setShowMessage] = useState(totalMessage);

  const filterMessage = (text: string): void => {
    if (!text.trim()) {
      setShowMessage(totalMessage);
    } else {
      const filtered = totalMessage.filter((msg) =>
        msg.user.name.includes(text),
      );
      setShowMessage(filtered);
    }
  };

  return (
    <Container>
      <Search filter={filterMessage} />
      {showMessage.map((msg) => (
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
  padding-top: 1rem;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;

export default MessageChatList;
