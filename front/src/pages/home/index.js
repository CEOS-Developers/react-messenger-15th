import { Container } from '../../styles/Container';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header2';
import Main from '../../components/main';
import { useState } from 'react';
const Home = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <Container>
      <Sidebar />
      <div>
        <Header />

        <Main>
          <h1>친구</h1>
          <h1>목록</h1>
          <h1>보여</h1>
          <h1>주는 곳</h1>
        </Main>
      </div>
    </Container>
  );
};

export default Home;
