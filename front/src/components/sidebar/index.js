import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  let navigate = useNavigate();

  return (
    <Container>
      <Btns>
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
      </Btns>
      <MenuContainer>
        <button onClick={() => navigate('/')}>홈</button>
        <button onClick={() => navigate('/rooms')}>대화방</button>
        <button onClick={() => navigate('/general')}>더보기</button>
      </MenuContainer>
      <div>
        <div>알림</div>
        <div>설정</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 20fr 2fr;
  background: #404040;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.div`
  border: 1px solid red;
  border-radius: 50%;
`;

const MenuContainer = styled.div`
  padding-top: 40px;
`;

export default Sidebar;
