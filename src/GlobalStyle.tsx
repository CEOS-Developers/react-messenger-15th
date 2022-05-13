import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

  :root{
    --ff-main: "Noto Sans KR", sans-serif;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  }
`;
