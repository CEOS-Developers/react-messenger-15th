import styled from 'styled-components';

export const Container = styled.main`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 600px) {
    width: 390px;
    height: 545px;
    min-height: 500px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px;
    display: grid;
    grid-template-columns: 65px 325px;
  }
`;
