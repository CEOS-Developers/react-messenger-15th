import React from 'react';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Friends = () => {
  return (
    <FriendsWrapper>
      <div>Page: Friends</div>
    </FriendsWrapper>
  );
};

export default Friends;
