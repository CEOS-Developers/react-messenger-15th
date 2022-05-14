import { Container } from '../styles/Container';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header2';
import Main from '../components/Main';
import Search from '../components/Search';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  chatRoomToggleState,
  closeWindow,
  friendModalToggleState,
  searchToggleState,
} from '../store/recoil';
import { useEffect } from 'react';
import ChatModal from '../components/ChatModal';
import UserBox from '../components/UserBox';
import ChatRoom from '../components/ChatRoom';
import Start from '../components/Start';
import styled from 'styled-components';
const Rooms = () => {
  const [window, setWindow] = useRecoilState(closeWindow);
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const [friendModalToggle, setFriendModalToggle] = useRecoilState(
    friendModalToggleState
  );
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  useEffect(() => {
    setSearchToggle(false);
    setFriendModalToggle(false);
    setChatModalToggle(false);
  }, []);
  // @ts-ignore
  // @ts-ignore
  return (
    <>
      {window ? (
        <Container>
          {chatRoomToggle && <ChatRoom />}
          {chatModalToggle && <ChatModal />}
          <Sidebar />
          <div>
            <Header />

            {searchToggle && <Search  />}
            <Main>
              <UserBox />
            </Main>
          </div>
        </Container>
      ) : (
        <StartWrapper>
          <Start />
        </StartWrapper>
      )}
    </>
  );
};

const StartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Rooms;
