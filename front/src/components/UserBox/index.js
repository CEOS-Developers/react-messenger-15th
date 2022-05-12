import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pathInfo } from '../../store/recoil';

function UserBox() {
  const [urlPath, setUrlPath] = useRecoilState(pathInfo);
  return (
    <Container>
      <ImgDiv>
        <Img></Img>
      </ImgDiv>
      {urlPath === '' && (
        <NickDiv>
          <div>이름</div>
          <div>대화명</div>
        </NickDiv>
      )}
      {urlPath === 'rooms' && (
        <NickDiv>
          <div>이름</div>
          <div>마지막 메세지</div>
        </NickDiv>
      )}
      {urlPath === '' && <div>프로필 뮤직</div>}
      {urlPath === 'rooms' && <div>시간</div>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  padding: 0px 3px;
`;
const Img = styled.img`
  border: 1px solid blue;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const NickDiv = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;
`;

export default UserBox;
