import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchToggleState, searchValue } from '../../store/recoil';
import { userInfo } from '../../store/recoil/data';
import styled from 'styled-components';
//친구찾기
function Search() {
  const [text, setText] = useState('');
  const [searchVal, setSearchVal] = useRecoilState(searchValue);
  const [user, setUser] = useRecoilState(userInfo);
  const onChange = (e) => {
    setText(e.target.value);
  };
  const [searchToggle, setSearchToggle] = useRecoilState(searchToggleState);
  const onToggleSearch = () => setSearchToggle((prev) => !prev);
  const handleSearch = () => {
    if (text !== '') {
      const result = user.filter((u) => u.userName === text);

      const [final] = result.map((name) => name.userName);
      const name = user.filter((u) => u.userName === final);
      console.log(name);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [text]);

  return (
    <div style={Style}>
      <input type="text" value={text} onChange={onChange} />
      <Btn onClick={onToggleSearch}>❌</Btn>
    </div>
  );
}
const Style = {
  position: 'absolute',
  right: '10px',
  top: '35px',
};

const Btn = styled.button`
  background: black;
  border: none;
`;

export default Search;
