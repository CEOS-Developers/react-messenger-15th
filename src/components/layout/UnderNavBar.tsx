import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const UnderNavBar = () => {
  return (
    <NavBarContainer>
      <StyledLink to="/">
        <AiOutlineUser size={20} />
      </StyledLink>
      <StyledLink to="/chatlist">
        <BsChatDots size={20} />
      </StyledLink>
      <StyledLink to="/setting">
        <AiOutlineSetting size={20} />
      </StyledLink>
    </NavBarContainer>
  );
};

export default UnderNavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.08rem solid #c2bbbb;
  border-width: 100%;
  line-height: 2.5;
  position: fixed;
  top: 44rem;
  align-items: center;
  text-align: center;
  width: 26rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem 3rem 0 3rem;
`;
