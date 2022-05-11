import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <LeftContents>
        <div>친구</div>
      </LeftContents>
      <RigthContents>
        <div>돋보기</div>
        <div>사람+</div>
      </RigthContents>
    </Container>
  );
}

const RigthContents = styled.div`
  display: flex;
`;
const LeftContents = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  border: 1px solid red;
`;

export default Header;
