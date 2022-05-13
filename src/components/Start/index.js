import { useRecoilState } from 'recoil';
import { closeWindow } from '../../store/recoil';
import styled from 'styled-components';

function Start() {
  const [window, setWindow] = useRecoilState(closeWindow);
  const handleWindow = () => {
    setWindow((prev) => !prev);
  };
  return (
    <Wrapper>
      <Img onClick={handleWindow} src="icon.png" />
      <Btn onClick={handleWindow}>시작하기</Btn>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Btn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default Start;
