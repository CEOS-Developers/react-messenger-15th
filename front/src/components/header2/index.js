import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  friendModalToggleState,
  searchToggleState,
} from '../../store/recoil';
function Header() {
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
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(location.pathname.slice(1));
  }, [location]);
  return (
    <Container>
      <LeftContents>
        {path === '' && <div>친구</div>}
        {path === 'rooms' && <div>채팅</div>}
        {path === 'general' && <div>더보기</div>}
      </LeftContents>
      <RigthContents>
        {path === '' && (
          <>
            <button onClick={onToggleSearch}>돋보기</button>
            <button onClick={onToggleFriendModal}>사람+</button>
          </>
        )}
        {path === 'rooms' && (
          <>
            <button onClick={onToggleSearch}>돋보기</button>
            <button onClick={onToggleChatModal}>말풍선+</button>
          </>
        )}
        {path === 'general' && null}
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
