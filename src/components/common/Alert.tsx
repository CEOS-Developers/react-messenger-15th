import styled from "styled-components";
import { IAlert } from "interface";

const Alert = ({ setVisibleAlert, value }: IAlert) => {
  const _handleClick = (): void => {
    setVisibleAlert(false);
  };

  return (
    <Wrapper>
      <Background onClick={_handleClick} />
      <Container>
        <AlertButtonBox>
          <AlertButton type="button" onClick={_handleClick}>
            X
          </AlertButton>
        </AlertButtonBox>
        <AlertContent>{value}</AlertContent>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: alert-show 0.2s;
  @keyframes alert-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Background = styled.div`
  background: #00000020;
  width: 100%;
  height: 100%;
`;
const Container = styled.section`
  position: absolute;
  width: 25rem;
  height: 9rem;
  background: #ffffff;
  border-radius: 0.4rem;
`;
const AlertContent = styled.section`
  margin: 1.8rem;
  font-size: 1.1em;
`;
const AlertButtonBox = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem;
`;
const AlertButton = styled.button`
  border: none;
  background: none;
  font-size: 1.2em;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    transition: 0.15s;
  }
`;

export default Alert;
