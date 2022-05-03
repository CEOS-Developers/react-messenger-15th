import { useState } from 'react';
import styled from 'styled-components';

const MessengerInput = ({ currentUser, textList, setTextList }: any) => {
  const [messageInput, setMessageInput] = useState('');
  const handleInputSubmit = (e: React.SyntheticEvent) => {
    if (messageInput) {
      const message = {
        userId: currentUser.userId,
        text: messageInput,
      };

      setTextList([...textList, message]);
    } else {
      alert('메세지를 입력하세요 ! ');
    }

    setMessageInput('');

    e.preventDefault();
  };
  console.log(textList);
  const handleInputChange = (e: any) => {
    setMessageInput(e.target.value);
  };

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
