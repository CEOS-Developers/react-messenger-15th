import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  height: 90vh;
  -webkit-box-shadow: 0px 1px 16px 2px #000000;
  box-shadow: 0px 1px 16px 2px #000000;
`;

export const Form1Style = styled.form`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
`;

export const Center = {
  textAlign: 'center',
};

export const Btn = styled.button`
  border-radius: 10px;
`;
