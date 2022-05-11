import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bottom } from './Elements';
import { BsChatLeft, BsPerson, BsGear } from 'react-icons/bs';

const NavBar = () => {
  return (
    <Bottom>
      <Menu>
        <Link to={'/'}>
          <BsPerson />
        </Link>
      </Menu>

      <Menu>
        <Link to={'/ChatListScreen'}>
          <BsChatLeft />
        </Link>
      </Menu>

      <Menu>
        <Link to={'/SettingScreen'}>
          <BsGear />
        </Link>
      </Menu>
    </Bottom>
  );
};

const Menu = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NavBar;
