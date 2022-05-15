import styled from 'styled-components';

function NotFound() {
  return <NotFoundBlock>404</NotFoundBlock>;
}

export default NotFound;

const NotFoundBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
`;
