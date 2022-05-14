import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { chatModalToggleState } from '../store/recoil';

function ChatModal() {
  const [chatModalToggle, setChatModalToggle] =
    useRecoilState(chatModalToggleState);
  const onToggleChatModal = () => setChatModalToggle((prev) => !prev);
  return (
    <Container>
      <div>
        <div>일반채팅</div>
        <div>오픈채팅</div>
      </div>
      <Btn onClick={onToggleChatModal}>❌</Btn>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 10px;
  padding: 10px;
  width: 70px;
  height: 50px;
  color: #e7e7e7;
  background-color: #302f30;
`;

const Btn = styled.button``;

export default ChatModal;
