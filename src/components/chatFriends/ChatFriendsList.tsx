import styled from "styled-components";
import user from "data/user.json";
import List from "components/layout/List";
import Search from "components/common/Search";
import { useState } from "react";

const ChatList = () => {
  const totalUser = user.slice(1);
  const [showUser, setShowUser] = useState(totalUser);

  const filterUser = (text: string): void => {
    if (!text.trim()) {
      setShowUser(totalUser);
    } else {
      const filtered = totalUser.filter((user) => user.name.includes(text));
      setShowUser(filtered);
    }
  };

  return (
    <Container>
      <Search filter={filterUser} />
      {showUser.map((user) => (
        <List
          key={user.id}
          link={user.id}
          img={user.name}
          title={user.name}
          subTitle={user.statusMessage}
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
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;

export default ChatList;
