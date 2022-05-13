import styled from 'styled-components';
import user from '../data/user.json';
import Friends from '../components/FriendList/Friends';
import UnderNavBar from '../components/layout/UnderNavBar';
import { HeaderContains, HeaderText } from '../components/layout/CommonStyle';
import SearchUser from '../components/FriendList/SearchUser';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

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
      <HeaderContains>
        <AiOutlineUser size={20} />
        <HeaderText>Friends</HeaderText>
      </HeaderContains>
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
  height: 31.8rem;
  overflow: auto;
`;
