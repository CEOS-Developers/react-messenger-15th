import styled from 'styled-components';

function FriendModal() {
  return (
    <Container>
      <div>친구추가</div>
      <div>연락처 아니면 ID</div>
      <div>폼 있는 곳</div>
      <div>추가 버튼</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 420px;
  color: #e7e7e7;
  background-color: #262626;
`;

export default FriendModal;
