import List from "components/layout/List";
import message from "data/message.json";
import styled from "styled-components";
import { useState } from "react";
import Search from "components/common/Search";
import { IUserType } from "interface";

const MessageChatList = () => {
  const [showMessage, setShowMessage] = useState(message);

  const filterMessage = (text: string): void => {
    if (!text.trim()) {
      setShowMessage(message);
    } else {
      const filtered = message.filter(
        (msg) =>
          msg.user.filter((user) =>
            user.name.toLowerCase().includes(text.trim().toLowerCase())
          ).length !== 0
      );
      setShowMessage(filtered);
    }
  };
  const _handleFriendsName = (friends: IUserType[]): string => {
    return friends.length === 1
      ? friends[0].name
      : friends.map((user) => user.name).join(", ");
  };

  return (
    <Container>
      <Search filter={filterMessage} />
      {showMessage.map(
        (msg) =>
          msg.messages.length !== 0 && (
            <List
              key={msg.id}
              link={msg.id}
              img={msg.user[0].name}
              title={_handleFriendsName(msg.user)}
              subTitle={msg.messages[msg.messages.length - 1].text}
            />
          )
      )}
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
