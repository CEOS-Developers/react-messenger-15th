import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 360px;
  height: 100%;
`;
export const NameField = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  width: 100%;
  text-align: center;
`;
export const BackBtn = styled.button`
  border: none;
  background: none;
`;
export const ChatBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const MessageBox = styled.div`
  overflow: scroll;

  width: 100%;
  height: 500px;
  border: 1px dotted blue;
`;

export const NameBox = styled.span`
  display: flex;
  justify-content: ${(props) => (props.me ? 'flex-end' : null)};
`;

export const MsgBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  border-radius: ${(props) =>
    props.me ? '12px 0px 12px 12px' : '0 12px 12px 12px'};

  background: ${(props) =>
    props.me ? 'rgb(25, 134, 252)' : 'rgb(241, 241, 243)'};
`;

export const MsgWrapper = styled.div`
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

export const MiddleDiv = styled.div`
  display: flex;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: ${(props) => (props.me ? '0px 5px 0px 0px' : '0px 0px 0px 5px')};
`;
export const ImgBox = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const FormBox = styled.form`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
`;
