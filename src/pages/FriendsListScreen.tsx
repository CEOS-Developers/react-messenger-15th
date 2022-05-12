import {
  Content,
  Header,
  HeaderTitle,
  Icon,
  Wrapper,
} from '../components/sharings/Elements';
import styled from 'styled-components';
import UserList from '../components/sharings/UserList';
import { MdPersonSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavBar from '../components/sharings/NavBar';

import friends from '../assets/friends.json';
import useInput from '../hooks/useInput';

const FriendsListScreen = () => {
  const { inputText, handleInputChange } = useInput('');

  const results = friends.filter(
    (friend) => inputText && friend.userName.includes(inputText)
  );

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Friends</HeaderTitle>
        <Icon />
      </Header>
      <Content>
        <SearchWrapper>
          <MdPersonSearch />
          <Input onChange={handleInputChange} placeholder="Search here" />
        </SearchWrapper>

        {inputText
          ? results.map(({ userId, userName, statusMsg }) => (
              <UserList
                key={userId}
                userId={userId}
                userName={userName}
                message={statusMsg}
              />
            ))
          : friends.map(({ userId, userName, statusMsg }) => (
              <Link to={`/ChatRoomScreen/${userId}`}>
                <UserList
                  key={userId}
                  userId={userId}
                  userName={userName}
                  message={statusMsg}
                />
              </Link>
            ))}
      </Content>
      <NavBar />
    </Wrapper>
  );
};

const SearchWrapper = styled.section`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 60%;
  height: 50%;
  padding: 0 4%;

  outline: none;
  font-size: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 12px;
`;

export default FriendsListScreen;
