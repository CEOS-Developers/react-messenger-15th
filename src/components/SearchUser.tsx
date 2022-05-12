import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchUser = () => {
  return (
    <SearchContainer>
      <BsSearch />
      <SearchInput placeholder="Search . . . " type="text" />
    </SearchContainer>
  );
};
export default SearchUser;

const SearchInput = styled.input``;
const SearchContainer = styled.div``;
