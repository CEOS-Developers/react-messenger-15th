import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Container>
      <Btns>
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
      </Btns>
      <MenuContainer>
        <div>홈</div>
        <div>대화방</div>
        <div>더보기</div>
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
