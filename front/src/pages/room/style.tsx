import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 360px;
  height: 100%;
  -webkit-box-shadow: 0px 1px 16px 2px #000000;
  box-shadow: 0px 1px 16px 2px #000000;
`;
export const NameField = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: center;
`;
export const BackBtn = styled.button`
  border: none;
  background: none;
`;
export const ChatBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const MessageBox = styled.div`
  overflow: scroll;

  width: 100%;
  height: 500px;
`;

export const NameBox = styled.span<{ me?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.me ? 'flex-end' : null)};
`;

export const MsgBox = styled.span<{ me?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: ${(props) =>
    props.me ? '12px 0px 12px 12px' : '0 12px 12px 12px'};

  background: ${(props) =>
    props.me ? 'rgb(25, 134, 252)' : 'rgb(241, 241, 243)'};
`;

export const MsgWrapper = styled.div<{ me?: boolean }>`
  padding: 10px;
  margin: 15px 0;

  display: flex;
  justify-content: ${(props) => (props.me ? 'flex-end' : null)};
  margin: auto;
  width: 90%;
`;
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 50%;
`;
export const TimeDiv = styled.div``;

export const MiddleDiv = styled.div<{ me?: boolean }>`
  display: flex;
`;

export const MiddleBox = styled.div<{ me?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: ${(props) => (props.me ? '0px 5px 0px 0px' : '0px 0px 0px 5px')};
`;
export const ImgBox = styled.img`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const FormBox = styled.form`
  padding: 20px 0 20px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  background: none;
  border: none;
`;

export const Input = styled.input`
  max-length: 35;
`;
