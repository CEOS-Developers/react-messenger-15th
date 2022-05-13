import styled from 'styled-components';
import FriendItem from '../components/FriendItem';
import { useInput } from '../hooks/useInput';
import React from 'react';

import friendsData from '../assets/json/friendsData.json';

function FriendList() {
  const [inputValue, handleInputChange] = useInput('');

  const searchResult = friendsData.filter(
    (friend) => inputValue && friend.userName.includes(inputValue)
  );

  return (
    <FriendListBlock>
      <SearchBar>
        <input onChange={handleInputChange} placeholder='Search' />
      </SearchBar>
      <SearchedFriendList>
        {inputValue
          ? searchResult.map(({ userId, userName }) => (
              <FriendItem key={userId} userId={userId} userName={userName} />
            ))
          : friendsData.map(({ userId, userName }) => (
              <FriendItem key={userId} userId={userId} userName={userName} />
            ))}
      </SearchedFriendList>
    </FriendListBlock>
  );
}

const FriendListBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 4%;
  border-top: 1px solid #e2e2e2;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 90%;
    height: 62%;
    padding-left: 5%;
    padding-right: 5%;

    font-size: 0.8rem;

    border: 1px solid #d2d2d2;
    border-radius: 20px;
  }
`;

const SearchedFriendList = styled.div`
  height: 88%;
`;

export default React.memo(FriendList);
