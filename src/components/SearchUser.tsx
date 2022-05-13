import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import useInput from '../hooks/useInput';
import { useEffect } from 'react';

const SearchUser = ({ filteredUser }: any) => {
  const { textinput, handleInputChange } = useInput('');

  useEffect(() => filteredUser(textinput), [filteredUser, textinput]);
  return (
    <SearchContainer>
      <BsSearch size={18} className="searchLogo" />
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

const SearchInput = styled.input`
  margin-left: 1rem;
  width: 16rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: 0.08rem solid #c2bbbb;
  padding-left: 1rem;
`;
const SearchContainer = styled.div`
  padding: 1rem;
  height: 2rem;
  text-align: center;

  .searchLogo {
    line-height: 3rem;
    position: relative;
    top: 0.3rem;
  }
`;
