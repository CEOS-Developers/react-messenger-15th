import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
    outline: none;
}

@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);

html,
body {
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Noto Sans KR', 'sans-serif', 'serif';
}

&:root {
  --vh: 100%;
}
`;
