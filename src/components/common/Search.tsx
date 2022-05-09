import styled from "styled-components";
import { ISearch } from "interface";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { resizeState } from "recoil/recoil";
import useInput from "hooks/useInput";
import { useEffect } from "react";

const Search = ({ filter }: ISearch) => {
  const { text, handleTextChange } = useInput("");
  const isMobile = useRecoilValue(resizeState);

  useEffect(() => {
    filter(text);
  }, [filter, text]);

  return (
    <Container>
      <IconBox>
        <AiOutlineSearch size={20} />
      </IconBox>
      <SearchInput
        placeholder="Search..."
        value={text}
        onChange={handleTextChange}
        isMobile={isMobile}
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
const IconBox = styled.section`
  margin: 1rem 0.5rem 0 1rem;
`;
const SearchInput = styled.input<{ isMobile: boolean }>`
  border: 0.05rem solid lightgrey;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.7rem;
  width: ${({ isMobile }) => (isMobile ? "85%" : "17rem")};
  height: 1rem;
  font-size: 0.7rem;
  :focus {
    outline: none;
  }
`;

export default Search;
