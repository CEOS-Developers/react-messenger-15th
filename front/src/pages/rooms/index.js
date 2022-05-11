import { Container } from '../../styles/Container';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header2';
import Main from '../../components/main';
import { useState } from 'react';
import Search from '../../components/search';
const Rooms = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  return (
    <Container>
      <Sidebar />
      <div>
        <Header />
        {searchToggle && <Search placeholder="채팅방 이름, 참여자 검색" />}
        <Main>
          <h1>대화방</h1>
          <h1>많이</h1>
          <h1>있는</h1>
          <h1>곳</h1>
        </Main>
      </div>
    </Container>
  );
};

export default Rooms;
