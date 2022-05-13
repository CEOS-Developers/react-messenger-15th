import styled from 'styled-components';
import user from '../data/user.json';
import Friends from '../components/Friends';
import UnderNavBar from '../components/layout/UnderNavBar';
import { HeaderContains } from '../components/layout/CommonStyle';
import SearchUser from '../components/SearchUser';
import { useState } from 'react';

const FriendList = () => {
  const [searchedUser, setsearchedUser] = useState(user);
  const filteredUser = (searchText: string) => {
    if (!searchText) {
      setsearchedUser(user);
    } else {
      const filtered = user.filter((element) => {
        return element.userName
          .toUpperCase()
          .includes(searchText.toUpperCase());
      });
      setsearchedUser(filtered);
    }
  };
  return (
    <FriendListContainer>
      <HeaderContains>Friends</HeaderContains>
      <Content>
        <SearchUser filteredUser={filteredUser} />
        {searchedUser.map((user) => (
          <Friends
            key={user.userId}
            userProfile={user.userProfile}
            userName={user.userName}
            userStatus={user.userStatus}
          />
        ))}
      </Content>
      <UnderNavBar />
    </FriendListContainer>
  );
};

export default FriendList;

const FriendListContainer = styled.div``;
const Content = styled.div`
  height: 31.5rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c2bbbb;
    border-radius: 10px;
  }
`;
