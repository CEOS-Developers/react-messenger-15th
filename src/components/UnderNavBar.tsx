import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const UnderNavBar = () => {
  return (
    <NavBarContainer>
      <StyledLink to="/">
        <AiOutlineUser />
      </StyledLink>
      <StyledLink to="/chatlist">
        <BsChatDots />
      </StyledLink>
      <StyledLink to="/setting">
        <AiOutlineSetting />
      </StyledLink>
    </NavBarContainer>
  );
};

export default UnderNavBar;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.08rem solid #c2bbbb; ;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 2rem;
  height: 2rem;
`;
