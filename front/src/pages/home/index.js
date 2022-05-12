import { Container } from '../../styles/Container';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header2';
import Main from '../../components/Main';
import Search from '../../components/Search';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  chatRoomToggleState,
  friendModalToggleState,
  searchToggleState,
} from '../../store/recoil';
import { useCallback, useEffect } from 'react';

import UserBox from '../../components/UserBox';
import ChatRoom from '../../components/ChatRoom';
const Home = () => {
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const [friendModalToggle, setFriendModalToggle] = useRecoilState(
    friendModalToggleState
  );
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);

  useEffect(() => {
    setSearchToggle(false);
    setFriendModalToggle(false);
    setChatModalToggle(false);
    setChatRoomToggle(false);
  }, []);
  return (
    <>
      {chatRoomToggle && <ChatRoom />}
      <Container>
        <Sidebar />
        <div>
          {searchToggle && <Search placeholder="이름으로 검색" />}
          <Header />
          <Main>
            <UserBox />
          </Main>
        </div>
      </Container>
    </>
  );
};

export default Home;
