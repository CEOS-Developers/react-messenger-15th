import styled from 'styled-components';

import { IInputFormProps } from '../Interfaces';
import useInput from '../../hooks/useInput';

const InputForm = ({
  currentUserId,
  chatList,
  setChatList,
}: IInputFormProps) => {
  const { inputText, handleInputChange, reset } = useInput();

  const handleNewMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        userId: currentUserId,
        message: inputText,
        msgId: Date.now(),
      };

      setChatList([...chatList, msg]);
      reset();
    }
  };

  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const heartMsg = {
      userId: currentUserId,
      message: '❤️',
      msgId: Date.now(),
    };

    setChatList([...chatList, heartMsg]);
  };

  return (
    <FormWrapper onSubmit={handleNewMsg}>
      <Button type="button" onClick={handleHeartClick}>
        ❤️
      </Button>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here"
      />
      <Button type="submit">+</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
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
`;

export default InputForm;
