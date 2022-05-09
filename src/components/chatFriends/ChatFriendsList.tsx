import styled from "styled-components";
import user from "data/user.json";
import List from "components/layout/List";

const ChatFriendsList = () => {
  return (
    <Container>
      {user.map((user) => (
        <List
          key={user.id}
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

export default ChatFriendsList;
