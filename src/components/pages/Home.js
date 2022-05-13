import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>Page: Home</div>
    </HomeWrapper>
  );
};

export default Home;
