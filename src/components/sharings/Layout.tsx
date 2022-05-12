import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Header, HeaderTitle, Wrapper } from './Elements';

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Messages</HeaderTitle>
      </Header>
      <Outlet />
      <NavBar />
    </Wrapper>
  );
};

export default Layout;
