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
  const [friendModalToggle, setFriendModalToggle] = useRecoilState(
    friendModalToggleState
  );
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);

  const onToggleSearch = () => setSearchToggle((prev) => !prev);
  const onToggleFriendModal = () => setFriendModalToggle((prev) => !prev);
  const onToggleChatModal = () => setChatModalToggle((prev) => !prev);
  const location = useLocation();

  useEffect(() => {
    setUrlPath(location.pathname.slice(1));
  }, [location]);
  return (
    <Container>
      <LeftContents>
        {urlPath === '' && <div>친구</div>}
        {urlPath === 'rooms' && <div>채팅</div>}
        {urlPath === 'general' && <div>더보기</div>}
      </LeftContents>
      <RigthContents>
        {urlPath === '' && (
          <>
            <button onClick={onToggleSearch}>돋보기</button>
            <button onClick={onToggleFriendModal}>사람+</button>
          </>
        )}
        {urlPath === 'rooms' && (
          <>
            <button onClick={onToggleSearch}>돋보기</button>
            <button onClick={onToggleChatModal}>말풍선+</button>
          </>
        )}
        {urlPath === 'general' && null}
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
