import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { closeWindow, pathInfo } from '../store/recoil';
import { useEffect } from 'react';

const Sidebar = () => {
  let navigate = useNavigate();
  const [urlPath, setUrlPath] = useRecoilState(pathInfo);
  const [window, setWindow] = useRecoilState(closeWindow);
  let location = useLocation();
  const onCloseWindow = () => {
    setWindow((prev) => !prev);
  };
  useEffect(() => {
    setUrlPath(location.pathname.slice(1));
  }, [location]);
  return (
    <Container>
      <BtnWrapper>
        <Cir1 onClick={onCloseWindow}>X</Cir1>
        <Cir2 />
        <Cir3 />
      </BtnWrapper>
      <MenuContainer>
        {urlPath === '' && (
          <>
            <Img src="home_black.png" onClick={() => navigate('/')} />
            <Img src="chat.png" onClick={() => navigate('/rooms')} />
            <Img src="settings.png" onClick={() => navigate('/general')} />
          </>
        )}
        {urlPath === 'rooms' && (
          <>
            <Img src="home.png" onClick={() => navigate('/')} />
            <Img src="chat_black.png" onClick={() => navigate('/rooms')} />
            <Img src="settings.png" onClick={() => navigate('/general')} />
          </>
        )}
        {urlPath === 'general' && (
          <>
            <Img src="home.png" onClick={() => navigate('/')} />
            <Img src="chat.png" onClick={() => navigate('/rooms')} />
            <Img
              src="settings_black.png"
              onClick={() => navigate('/general')}
            />
          </>
        )}
      </MenuContainer>
      <UtilWrapper>
        <Alert>알림</Alert>
        <Setting>설정</Setting>
      </UtilWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 20fr 2fr;
  background: #404040;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Img = styled.img`
  margin-bottom: 15px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Alert = styled.div`
  &:hover {
    color: antiquewhite;
    cursor: pointer;
  }
`;

const Setting = styled.div`
  &:hover {
    color: antiquewhite;
    cursor: pointer;
  }
`;

const UtilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BtnWrapper = styled.div`
  padding: 5px 0 0 5px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.div`
  border: 1px solid red;
  border-radius: 50%;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
`;
const CircleWrapper = styled.div`
  display: flex;
  padding: 5px;
`;

export const Cir1 = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: indianred;
  border: 1px solid indianred;
  border-radius: 50%;
  margin-right: 5px;
  color: black;
  font-size: 10px;
  text-align: center;
`;

export const Cir2 = styled.div`
  width: 15px;
  height: 15px;
  background: yellow;
  border: 1px solid yellow;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Cir3 = styled.div`
  width: 15px;
  height: 15px;
  background: green;
  border: 1px solid green;
  border-radius: 50%;
  margin-right: 5px;
`;

export default Sidebar;
