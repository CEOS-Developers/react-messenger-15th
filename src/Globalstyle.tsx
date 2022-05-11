import { createGlobalStyle } from 'styled-components';

//페이지 전체에 적용될 style
const GlobalStyle = createGlobalStyle`

button {
  &:hover{
    cursor: pointer;
  }
  border: none;
  background: none;
  font-size: 17px;
}
// 링크 글로벌 스타일로 할 수 있으면 빼기 

`;

export default GlobalStyle;
