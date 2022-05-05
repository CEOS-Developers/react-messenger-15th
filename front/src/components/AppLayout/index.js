import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <LayDiv>
      <Outlet />
    </LayDiv>
  );
};

const LayDiv = styled.div`
  width: 370px;
  margin: auto;
  margin-top: 5vh;
  height: 90vh;
`;

export default AppLayout;
