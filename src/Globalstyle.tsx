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

`;
export default GlobalStyle;
