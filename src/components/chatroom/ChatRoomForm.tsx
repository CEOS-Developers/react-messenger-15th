import styled from 'styled-components';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { chats } from '../../types/index';
import { useInput } from '../../hooks/useInput';

type ChatRoomFormProps = {
  receiverUserId: string;
  chatList: chats;
  setChatList: (chatList: chats) => void;
};

export function ChatRoomForm({
  receiverUserId,
  chatList,
  setChatList,
}: ChatRoomFormProps) {
  const [inputValue, handleInputChange, resetInput] = useInput('');

  const handleSubmitBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputValue) alert('Please enter a message');

    const tmpReceiverUserId = 'user1';
    const newMsg = {
      userId: receiverUserId,
      msg: inputValue,
      timestamp: Date.now(),
    };
    setChatList({
      userId: tmpReceiverUserId,
      chats: [...chatList.chats, newMsg],
    });
    resetInput();
  };

  return (
    <ChatRoomFormBlock>
      <input
        placeholder="Text Message..."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleSubmitBtnClick}>
        <AiOutlineDownCircle />
      </button>
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

  input {
    width: 60%;
    height: 50%;
    padding: 0 4%;

    outline: none;
    font-size: 12px;

    border: 1px solid #d2d2d2;
    border-radius: 12px;
  }

  button {
    width: 10%;
    height: 50%;

    border: none;
    background: none;

    :hover {
      cursor: pointer;
    }
  }
`;
