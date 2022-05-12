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

const FriendListContainer = styled.div`
  position: absolute;
`;
const Content = styled.div``;
