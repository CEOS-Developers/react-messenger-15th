import { IChat } from '../../types';
import { RootState } from '../../modules';
import { concatNewChat } from '../../modules/chats';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useInput } from '../../hooks/useInput';
import React from 'react';

import meData from '../../assets/json/meData.json';

type TProps = {
  partnerUserId: number;
};

function ChatRoomFormContainer({ partnerUserId }: TProps) {
  const [inputValue, handleInputChange, resetInput, isValid, setIsValid] =
    useInput('');

  const receiverState = useSelector(({ receiver }: RootState) => ({
    userId: receiver.userId,
  }));

  const dispatch = useDispatch();
  const concatNewChatTrigger = useCallback(
    (newChat: IChat) => dispatch(concatNewChat(newChat)),
    [dispatch]
  );

  function handleSubmitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputValue) alert('Please enter a message');
    else {
      let senderUserId;
      if (receiverState.userId === meData.userId) senderUserId = partnerUserId;
      else senderUserId = meData.userId;
      const newChat: IChat = {
        userId: senderUserId,
        msg: inputValue,
        unixTime: Date.now(),
      };
      concatNewChatTrigger(newChat);
      resetInput();
      setIsValid(false);
    }
  }

  return (
    <ChatRoomFormContainerBlock>
      <input
        placeholder='Text Message'
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      ></input>
      <SubmitBtn onClick={handleSubmitBtnClick} isValid={isValid}>
        <HiOutlineChevronDown />
      </SubmitBtn>
    </ChatRoomFormContainerBlock>
  );
}

const ChatRoomFormContainerBlock = styled.form`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  input {
    width: 90%;
    height: 65%;
    padding-left: 5%;
    padding-right: 11.5%;

    font-size: 0.8rem;

    border: 1px solid #d2d2d2;
    border-radius: 20px;
  }
`;

const SubmitBtn = styled.button<{ isValid: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  z-index: 5;

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

export default React.memo(ChatRoomFormContainer);
