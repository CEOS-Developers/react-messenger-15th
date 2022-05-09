import styled from "styled-components";
import { Link } from "react-router-dom";
import MessageProfile from "./MessageProfile";

const MessageProfileContainer = () => {
  return (
    <Container>
      <BackButton to="/chatList">
        <BackButtonImg
          alt="backbutton"
          src="/images/backbutton.png"
          height={12}
        />
      </BackButton>
      <MessageProfile />
    </Container>
  );
};

const Container = styled.section`
  height: 19%;
  border-bottom: 1px solid lightgrey;
  display: grid;
  grid-template-columns: 1fr 150px 1fr;
`;
const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const BackButtonImg = styled.img`
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default MessageProfileContainer;
