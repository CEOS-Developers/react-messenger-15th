import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  friendModalToggleState,
  searchToggleState,
  pathInfo,
} from '../../store/recoil';
function Header() {
  const [urlPath, setUrlPath] = useRecoilState(pathInfo);
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);

  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);

  const onToggleSearch = () => setSearchToggle((prev) => !prev);

  const onToggleChatModal = () => setChatModalToggle((prev) => !prev);
  const location = useLocation();

  useEffect(() => {
    setUrlPath(location.pathname.slice(1));
  }, [location]);
  return (
    <Container>
      <LeftContents>
        {urlPath === '' && <Div>친구</Div>}
        {urlPath === 'rooms' && <Div>채팅</Div>}
        {urlPath === 'general' && <Div>더보기</Div>}
      </LeftContents>
      <RigthContents>
        {urlPath === '' && (
          <IconWrapper>
            <Glass src="glass.png" onClick={onToggleSearch} />
          </IconWrapper>
        )}
        {urlPath === 'rooms' && (
          <IconWrapper>
            <Speech src="speech-bubble.png" onClick={onToggleChatModal} />
          </IconWrapper>
        )}
        {urlPath === 'general' && null}
      </RigthContents>
    </Container>
  );
}
const IconWrapper = styled.div`
  display: flex;

  padding: 5px;
`;

const Glass = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
  color: white;
  &:hover {
    background: antiquewhite;
    border-radius: 50%;
    padding: 5px;
  }
`;
const Speech = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background: antiquewhite;
    border-radius: 50%;
    padding: 5px;
  }
`;

const RigthContents = styled.div`
  display: flex;
`;
const LeftContents = styled.div`
  display: flex;
`;

const Div = styled.div`
  color: white;
  font-weight: 800;
  font-size: 20px;
  padding: 5px 0 0 15px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  border-bottom: 2px solid #404040;
  background: #262626;
  border-top-right-radius: 10px;
`;

export default Header;
