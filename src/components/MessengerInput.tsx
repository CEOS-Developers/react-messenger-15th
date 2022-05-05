import { useState } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { IMessengerInputProps } from '../interface/interface';

const MessengerInput = ({
  currentUser,
  chatList,
  setChatList,
}: IMessengerInputProps) => {
  const { messageInput, handleInputChange, handleInputInitialize } =
    useInput('');
  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //공백이 아닐 때에만 send 가능
    if (messageInput.replace(/\s+/g, '')) {
      const message = {
        userId: currentUser.userId,
        userName: currentUser.userName,
        text: messageInput,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };

      setChatList([...chatList, message]);

      //공백일 경우 alert
    } else {
      alert('메세지를 입력하세요 ! ');
    }

    handleInputInitialize();

    //새로고침 방지
    e.preventDefault();
  };

  console.log(chatList);

  return (
    <form onSubmit={handleInputSubmit}>
      <InputBox
        value={messageInput}
        onChange={handleInputChange}
        placeholder="Send Message . . ."
        type="text"
      />
      <SendButton>🕸</SendButton>
    </form>
  );
};

const InputBox = styled.input``;
const SendButton = styled.button`
  background-color: transparent;
`;

export default MessengerInput;
