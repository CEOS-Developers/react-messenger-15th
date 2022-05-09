import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";

const ChatFooter = () => {
  return (
    <Container>
      <IconBox to="/">
        <AiOutlineUser size={22} />
      </IconBox>
      <IconBox to="/chatList">
        <BiMessage size={22} />
      </IconBox>
      <IconBox to="/setting">
        <AiOutlineSetting size={22} />
      </IconBox>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const IconBox = styled(Link)`
  display: flex;
  justify-content: center;
  color: #1986fc;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default ChatFooter;
