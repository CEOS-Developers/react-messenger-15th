import { Container } from '../../styles/Container';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header2';
import Main from '../../components/Main';
import Search from '../../components/Search';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  friendModalToggleState,
  searchToggleState,
} from '../../store/recoil';
import { useEffect } from 'react';
import ChatModal from '../../components/ChatModal';
import FriendModal from '../../components/FriendModal';
const Home = () => {
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const [friendModalToggle, setFriendModalToggle] = useRecoilState(
    friendModalToggleState
  );
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);
  useEffect(() => {
    setSearchToggle(false);
    setFriendModalToggle(false);
    setChatModalToggle(false);
  }, []);
  return (
    <>
      {friendModalToggle && <FriendModal />}
      <Container>
        <Sidebar />
        <div>
          <Header />
          {searchToggle && <Search placeholder="이름으로 검색" />}
          <Main>
            <h1>친구</h1>
            <h1>목록</h1>
            <h1>보여</h1>
            <h1>주는 곳</h1>
          </Main>
        </div>
      </Container>
    </>
  );
};

export default Home;
