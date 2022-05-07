import MessengerBox from './components/MessengerBox';
import GlobalStyle from './Globalstyle';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MessengerContainer>
        <MessengerBox />
      </MessengerContainer>
    </>
  );
};
export default App;

const MessengerContainer = styled.div`
  /* 너비 | 스타일 | 색 */
  border: 0.08rem solid #c2bbbb;
  margin: 0 auto;
  margin-top: 5rem;
  background: white;
  border-radius: 0.5rem;
  height: 43rem;
  width: 26rem;
`;
