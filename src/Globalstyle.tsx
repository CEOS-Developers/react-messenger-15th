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

::-webkit-scrollbar {
    width: 0.9rem;
    margin: 0;
  }

  ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #c2bbbb;
    border-radius: 10px;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;

export default GlobalStyle;
