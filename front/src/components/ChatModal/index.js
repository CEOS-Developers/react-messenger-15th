import styled from 'styled-components';

function ChatModal() {
  return (
    <Container>
      <div>
        <div>일반채팅</div>
        <div>오픈채팅</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  width: 70px;
  height: 50px;
  color: #e7e7e7;
  background-color: #302f30;
`;

export default ChatModal;
