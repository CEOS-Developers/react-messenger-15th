import styled from "styled-components";

const ChatHeader = ({ title }: { title: string }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.section`
  height: 19%;
  border-bottom: 0.05rem solid lightgrey;
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem;
`;

export default ChatHeader;
