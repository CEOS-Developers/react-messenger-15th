import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchToggleState, searchValue } from '../store/recoil';
import { userInfo } from '../store/recoil/data';

import styled from 'styled-components';
import SearchUserBox from './SearchUserBox';

function Search() {
  const [text, setText] = useState('');
  const [searchVal, setSearchVal] = useRecoilState(searchValue);
  const [user, setUser] = useRecoilState(userInfo);
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const onToggleSearch = () => setSearchToggle((prev) => !prev);
  const handleSearch = () => {
    if (text === '' || text === null) {
      setSearchVal(undefined);
    } else {
      const userNameArray = user.map((u) => u.userName).slice(1);
      const result = userNameArray.filter((name) => name.includes(text));
      console.log(result);
      const searchedUser  = user
        .map((u, i) => {
          if (result.includes(u.userName)) {
            return u;
          }
        })
        .filter((c) => typeof c !== 'undefined');
      // @ts-ignore
      setSearchVal(searchedUser);
    }
  };

  useEffect(() => {
    handleSearch();
    // if (searchToggle === false) {
    //   setSearchVal(null);
    // }
  }, [text]);

  return (
    <Container>
      <InputWrapper>
        <Input type="text" value={text} onChange={onChange} />
        <Btn onClick={onToggleSearch}>❌</Btn>
      </InputWrapper>
      <div>
        <SearchUserBox />
      </div>
    </Container>
  );
}
const InputWrapper = styled.div`
  padding: 1px;
`;

const Input = styled.input`
  width: 90%;
`;

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  width: 300px;
  height: 100px;
  background: gray;
  overflow: scroll;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const Btn = styled.button`
  background: black;
  border: none;
  margin-left: 1px;
`;

export default Search;
