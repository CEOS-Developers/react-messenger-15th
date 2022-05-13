import { concatChatList } from '../../modules/chatList';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { useChatListDispatch } from '../../contexts/ChatListContext';
import { useReceiverUserIdState } from '../../contexts/ReceiverUserIdContext';
import styled, { css } from 'styled-components';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { useInput } from '../../hooks/useInput';
import { IChat } from '../../types/index';
import React from 'react';

import me from '../../assets/json/me.json';

type TChatRoomFormProps = {
  partnerUserId: number;
};

function ChatRoomFormContainer({ partnerUserId }: any) {
  const [inputValue, handleInputChange, resetInput, isValid, setIsValid] =
    useInput('');

  // const receiverUserIdState = useReceiverUserIdState();
  // const chatListDispatch = useChatListDispatch();
  // const concatNewChat = (newChat: IChat) => {
  //   chatListDispatch({
  //     type: 'CONCAT',
  //     newChat: newChat,
  //   });
  // };

  const receiver = useSelector(({ receiver }: any) => ({
    userId: receiver.userId,
  }));
  const dispatch = useDispatch();
  const concatChatList = useCallback(
    (newChat: any): any => dispatch(concatChatList(newChat)),
    [dispatch]
  );

  // function handleSubmitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
  //   e.preventDefault();
  //   if (!inputValue) alert('Please enter a message');
  //   else {
  //     let senderUserId;
  //     if (receiverUserIdState.receiverUserId === me.userId)
  //       senderUserId = partnerUserId;
  //     else senderUserId = me.userId;
  //     const newChat: IChat = {
  //       userId: senderUserId,
  //       msg: inputValue,
  //       unixTime: Date.now(),
  //     };
  //     concatNewChat(newChat);
  //     resetInput();
  //     setIsValid(false);
  //   }
  // }

  function handleSubmitBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!inputValue) alert('Please enter a message');
    else {
      let senderUserId;
      if (receiver.userId === me.userId) senderUserId = partnerUserId;
      else senderUserId = me.userId;
      const newChat: IChat = {
        userId: senderUserId,
        msg: inputValue,
        unixTime: Date.now(),
      };
      // concatNewChat(newChat);
      concatChatList(newChat);
      resetInput();
      setIsValid(false);
    }
  }

  return (
    <ChatRoomFormBlock>
      <input
        placeholder='Text Message'
        value={inputValue}
        onChange={handleInputChange}
        autoFocus
      ></input>
      <SubmitBtn onClick={handleSubmitBtnClick} isValid={isValid}>
        <HiOutlineChevronDown />
      </SubmitBtn>
    </ChatRoomFormBlock>
  );
}

export default ChatRoomFormContainer;

// export default connect(
//   ({ receiver }) => ({ receiverUserId: receiver.userId }),
//   {}
// )(ChatRoomFormContainer);

const ChatRoomFormBlock = styled.form`
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
