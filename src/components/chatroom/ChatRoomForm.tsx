import styled, { css } from 'styled-components';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useInput } from '../../lib/useInput';
import { Chats } from '../../types/index';
import me from '../../data/me.json';
import React from 'react';

type ChatRoomFormProps = {
  partnerUserId: number;
  receiverUserId: number;
  chatList: Chats;
  setChatList: (chatList: Chats) => void;
};

function ChatRoomForm({
  partnerUserId,
  receiverUserId,
  chatList,
  setChatList,
}: ChatRoomFormProps) {
  const [inputValue, handleInputChange, resetInput, isValid, setIsValid] =
    useInput('');
  function handleSubmitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputValue) alert('Please enter a message');
    else {
      let senderUserId;
      if (receiverUserId == me.userId) senderUserId = partnerUserId;
      else senderUserId = me.userId;

      const newChat = {
        userId: senderUserId,
        msg: inputValue,
        unixTime: Date.now(),
      };
      setChatList(chatList.concat(newChat));
      resetInput();
      setIsValid(false);
    }
  }

  return (
    <ChatRoomFormBlock>
      <input
        placeholder="Text Message..."
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      ></input>
      <Btn onClick={handleSubmitBtnClick} isValid={isValid}>
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

const Btn = styled.button<{ isValid: boolean }>`
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

    transition: 0.125s all ease-in;

    ${({ isValid }) =>
      isValid &&
      css`
        background: #1986fc;

        &:hover {
          cursor: pointer;
        }

        &:active {
          background: #1987fc9d;
        }

        transform: rotate(180deg);
        transition: 0.125s all ease-in;
      `}
  }
`;

export default ChatRoomForm;
