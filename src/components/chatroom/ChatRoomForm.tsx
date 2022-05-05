import styled, { css } from 'styled-components';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
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
  const [isTyping, setIsTyping] = useState(false);

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
    setIsTyping((prevIsTyping) => !prevIsTyping);
  };

  return (
    <ChatRoomFormBlock>
      <input
        placeholder="Text Message..."
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <Btn onClick={handleSubmitBtnClick} isTyping={isTyping}>
        <HiOutlineChevronDown />
      </Btn>
    </ChatRoomFormBlock>
  );
}

const ChatRoomFormBlock = styled.form`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-top: 1px solid #e2e2e2;

  input {
    width: 90%;
    height: 50%;
    padding-left: 4%;
    padding-right: 11.5%;

    font-size: 0.8rem;

    border: 1px solid #d2d2d2;
    border-radius: 20px;
  }
`;

const Btn = styled.button<{ isTyping: boolean }>`
  position: absolute;
  z-index: 5;
  top: 27.5%;
  right: 5.5%;

  width: 10%;
  height: 50%;
  padding: 0;

  border: none;
  background: none;

  svg {
    flex: 1;
    font-size: 1.7rem;

    color: white;
    background: #5e5d5d6e;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
    &:active {
      background: #1987fc9d;
    }

    ${({ isTyping }) =>
      isTyping &&
      css`
        background: #1986fc;
        &:active {
          background: #1987fc9d;
        }
        transform: rotate(180deg);
      `}
  }
`;

/*
 ** [HTML, CSS] Input박스 안에 아이콘 넣기 (fontawesome)
 ** https://joogaem.com/m/entry/HTML-CSS-Input%EB%B0%95%EC%8A%A4-%EC%95%88%EC%97%90-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%84%A3%EA%B8%B0-fontawesome
 */
