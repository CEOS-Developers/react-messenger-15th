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
import UserBox from '../../components/UserBox';
const Rooms = () => {
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
      {chatModalToggle && <ChatModal />}
      <Container>
        <Sidebar />
        <div>
          <Header />
          {searchToggle && <Search placeholder="채팅방 이름, 참여자 검색" />}
          <Main>
            <UserBox />
          </Main>
        </div>
      </Container>
    </>
  );
};

export default Rooms;
