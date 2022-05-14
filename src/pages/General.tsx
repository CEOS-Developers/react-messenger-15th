import { Container } from '../styles/Container';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header2'
import Main from '../components/Main'
import Start from '../components/Start';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { closeWindow } from '../store/recoil';

const General = () => {
  const [window, setWindow] = useRecoilState(closeWindow);
  return (
    <>
      {window ? (
        <Container>
          <Sidebar />
          <div>
            <Header />
            <Main>
              <Wrapper>
                <Wallet src="wallet.png" />
                <Fix src="fix.png" />
                <Shopping src="shopping.png" />
                <Calendar src="calendar.png" />
                <Gift src="giftbox.png" />
              </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Wallet = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;
const Fix = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;
const Shopping = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;
const Calendar = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;
const Gift = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;

export default General;
