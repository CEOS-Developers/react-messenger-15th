import styled from 'styled-components';
import { AiOutlineDownCircle } from 'react-icons/ai';

export function ChatRoomForm() {
  return (
    <ChatRoomFormBlock>
      <Input></Input>
      <Button>
        <AiOutlineDownCircle />
      </Button>
    </ChatRoomFormBlock>
  );
}

const ChatRoomFormBlock = styled.form`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border-top: 1px solid #e2e2e2;
`;

const Input = styled.input`
  width: 60%;
  height: 50%;
  padding: 0 4%;

  outline: none;
  font-size: 12px;

  border: 1px solid #d2d2d2;
  border-radius: 12px;
`;

const Button = styled.button`
  width: 10%;
  height: 50%;

  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;
