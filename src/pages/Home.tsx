import { Container } from '../styles/Container';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header2';
import Main from '../components/Main';
import Search from '../components/Search';
import UserBox from '../components/UserBox';
import ChatRoom from '../components/ChatRoom';
import Start from '../components/Start';
import { useRecoilState } from 'recoil';
import {
  chatModalToggleState,
  chatRoomToggleState,
  closeWindow,
  friendModalToggleState,
  searchToggleState,
} from '../store/recoil';
import { useCallback, useEffect } from 'react';

import styled from 'styled-components';
const Home = () => {
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const [friendModalToggle, setFriendModalToggle] = useRecoilState(
    friendModalToggleState
  );
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);
  const [window, setWindow] = useRecoilState(closeWindow);
  useEffect(() => {
    setSearchToggle(false);
    setFriendModalToggle(false);
    setChatModalToggle(false);
    setChatRoomToggle(false);
  }, []);
  return (
    <>
      {window ? (
        <Container>
          {chatRoomToggle && <ChatRoom />}
          <Sidebar />
          <div>
            {searchToggle && <Search  />}
            <Header />
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

export default Home;
