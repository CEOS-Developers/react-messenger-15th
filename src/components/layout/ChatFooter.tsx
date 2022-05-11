import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { useEffect, useState } from "react";

const ChatFooter = () => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (pathname.includes("chatList")) {
      setSelected("chatList");
    } else if (pathname.includes("setting")) {
      setSelected("setting");
    } else {
      setSelected("friends");
    }
  }, [pathname]);

  return (
    <Container>
      <IconBox to="/" selected={selected === "friends"}>
        <AiOutlineUser size={22} />
      </IconBox>
      <IconBox to="/chatList" selected={selected === "chatList"}>
        <BiMessage size={22} />
      </IconBox>
      <IconBox to="/setting" selected={selected === "setting"}>
        <AiOutlineSetting size={22} />
      </IconBox>
    </Container>
  );
};

const Container = styled.section`
  border-top: 0.05rem solid lightgrey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const IconBox = styled(Link)<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  margin: 1.3rem;
  color: ${({ selected }) => (selected ? "#1986fc" : "#000000")};
  cursor: pointer;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default ChatFooter;
