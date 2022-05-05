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
  margin: 0 auto;
  margin-top: 5rem;
  background: white;
  border-color: #c2bbbb;
  border-radius: 0.5rem;
  border-width: 0.08rem;
  border-style: solid;
  height: 80vh;
  width: 30vw;
`;
