import { Container } from '../../styles/Container';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header2';
import Main from '../../components/main';
const Rooms = () => {
  return (
    <Container>
      <Sidebar />
      <div>
        <Header />
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
