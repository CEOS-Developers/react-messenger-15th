import InputMessageForm from "components/messageInput/InputMessageForm";
import MessageProfile from "components/messageProfile/MessageProfile";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Container>
        <MessageProfile />
        <InputMessageForm />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 640px;
  width: 360px;
  border: 1px solid lightgrey;
  border-radius: 7px;
`;

export default App;
