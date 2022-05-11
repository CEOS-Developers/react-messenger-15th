import styled from 'styled-components';

function Main({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  border: 1px solid red;
  height: 505px;
`;

export default Main;
