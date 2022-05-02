import styled from "styled-components";
import MessageProfile from "./MessageProfile";

const MessageProfileContainer = () => {
  return (
    <Wrapper>
      <BackButton>
        <BackButtonImg alt="backbutton" src="backbutton.png" height={12} />
      </BackButton>
      <MessageProfile />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 120px;
  border-bottom: 1px solid lightgrey;
  display: grid;
  grid-template-columns: 1fr 150px 1fr;
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const BackButtonImg = styled.img`
  cursor: pointer;
`;

export default MessageProfileContainer;
