import { useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { IMessageData, IMessengerInputProps } from '../../interface/interface';
import { messageDataState } from '../../state/MessageDataState';
const MessengerInput = ({ currentUser, messageData }: any) => {
  const { textinput, handleInputChange, handleInputInitialize } = useInput('');

  const setMessageData = useSetRecoilState<IMessageData[]>(messageDataState);
  console.log(setMessageData);
  const handleInputSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      //공백이 아닐 때에만 send 가능
      if (textinput.replace(/\s+/g, '')) {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const messageObject = {
          userId: currentUser.userId,
          userName: currentUser.userName,
          text: textinput,
          time: `${hours}:${minutes}`,
        };

        setMessageData([...messageData, messageObject]);

        //공백일 경우 alert
      } else {
        alert('메세지를 입력하세요 ! ');
      }

      handleInputInitialize();

      //새로고침 방지
      e.preventDefault();
    },
    [messageData, textinput]
  );
  console.log(messageData);

  return (
    <SubmitForm onSubmit={handleInputSubmit}>
      <InputBoxWrapper>
        <InputBox
          value={textinput}
          onChange={handleInputChange}
          placeholder="Send Message . . ."
          type="text"
        />
      </InputBoxWrapper>

      <SendButton>🕸</SendButton>
    </SubmitForm>
  );
};

export default MessengerInput;

const SubmitForm = styled.form`
  align-items: center;
  border-top-style: solid;
  border-color: #c2bbbb;
  border-width: 0.08rem;
  padding: 0;
  height: 6rem;
  display: flex;
  justify-content: space-evenly;
`;

const InputBoxWrapper = styled.div`
  padding-left: 2rem;
`;

const InputBox = styled.input`
  padding-left: 1rem;
  line-height: 5.5rem;
  border-color: #c2bbbb;
  border-width: 0.08rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 18rem;
  height: 2.3rem;
  margin: 0;
  line-height: 6rem;
`;
const SendButton = styled.button`
  line-height: 6rem;
  background-color: transparent;
  font-size: 1.5rem;
`;
