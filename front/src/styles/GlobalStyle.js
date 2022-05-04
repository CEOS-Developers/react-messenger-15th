import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    // basic
    --bg-color : black;
    --font-color1 : white;
    --font-color2 : #bf9053;
    --font-color3 : black; 

    // mode toggle
    --bg-TColor : white;
    --font-Tcolor1 : black;
    --font-Tcolor2 : #6ed746;
    --font-Tcolor3 : white;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  }
  * {
  font-family: 'Pretendard', Arial;
  font-display: fallback;
}
`;

export default GlobalStyle;
