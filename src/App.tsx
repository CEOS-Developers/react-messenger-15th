import MessageChat from "components/messageChatRoom/MessageChat";
import InputMessageForm from "components/messageInput/InputMessageForm";
import MessageProfileContainer from "components/messageProfile/MessageProfileContainer";
import styled, { css } from "styled-components";
import useResponsiveSize from "hooks/useResponsiveSize";
import useMessage from "hooks/useMessage";
import { useEffect } from "react";

const App = () => {
  const { isMobile, setIsMobile } = useResponsiveSize();
  const { messages, addMessage } = useMessage();

  const _handleResize = () => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    }

    window.addEventListener("resize", _handleResize);
    return () => {
      window.removeEventListener("resize", _handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <Container isMobile={isMobile}>
        <MessageProfileContainer />
        <MessageChat messages={messages} />
        <InputMessageForm sendMessage={addMessage} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div<{ isMobile: boolean }>`
  border: 1px solid lightgrey;
  ${({ isMobile }) =>
    isMobile
      ? css`
          height: 100%;
          width: 100%;
        `
      : css`
          height: 640px;
          width: 360px;
          border-radius: 7px;
        `}
`;

export default App;
