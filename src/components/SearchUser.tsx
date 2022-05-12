import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import useInput from '../hooks/useInput';
import { useEffect } from 'react';

const SearchUser = ({ filteredUser }: any) => {
  const { textinput, handleInputChange } = useInput('');

  useEffect(() => filteredUser(textinput), [filteredUser, textinput]);
  return (
    <SearchContainer>
      <BsSearch />
      <SearchInput
        placeholder="Search . . . "
        value={textinput}
        type="text"
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};
export default SearchUser;

const SearchInput = styled.input``;
const SearchContainer = styled.div``;
