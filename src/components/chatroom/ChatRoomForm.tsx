import styled from 'styled-components';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { useState } from 'react';

const useInput = (initialText: any) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const reset = () => {
    setInputText('');
  };

  return [inputText, handleInputChange, reset];
};

type ChatRoomFormProps = {
  currentUserId: string;
  chatList: any;
  setChatList: any;
};

export function ChatRoomForm({
  currentUserId,
  chatList,
  setChatList,
}: ChatRoomFormProps) {
  const [inputText, handleInputChange, reset] = useInput('');

  const handleAddNewMsg = (e: any) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        userId: currentUserId,
        message: inputText,
        sentAt: Date.now(),
      };

      setChatList({ userId: 'user1', chats: [...chatList.chats, msg] });
      reset();
    } else {
      alert('Please enter a message');
    }
  };

  return (
    <ChatRoomFormBlock>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Message..."
        spellCheck={false}
      ></Input>

      <Button onClick={handleAddNewMsg}>
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
