import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Header, HeaderTitle, Wrapper } from './Elements';

const Layout = ({ headerText }) => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>{headerText}</HeaderTitle>
      </Header>
      <Outlet />
      <NavBar />
    </Wrapper>
  );
};

export default Layout;
