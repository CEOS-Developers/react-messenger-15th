import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './FontStyle.css';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
    outline: none;
}

html,
body {
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

* {
  font-family: 'Noto Sans KR', 'sans-serif', 'serif';
  font-display: fallback;
}

&:root {
  --vh: 100%;
}
`;
