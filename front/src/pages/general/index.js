import { Container } from '../../styles/Container';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header2';
import Main from '../../components/Main';

const General = () => {
  return (
    <Container>
      <Sidebar />
      <div>
        <Header />
        <Main>
          <h1>환경</h1>
          <h1>설정</h1>
          <h1>하는</h1>
          <h1>곳</h1>
        </Main>
      </div>
    </Container>
  );
};

export default General;
