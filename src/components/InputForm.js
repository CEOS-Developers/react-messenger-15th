import useInput from '../hooks/useInput';
import styled from 'styled-components';

const InputForm = ({ currentUserId, chatList, setChatList }) => {
  const [inputText, handleInputChange, reset] = useInput('');

  const handleNewMsg = (e) => {
    e.preventDefault();

    if (inputText) {
      const msg = {
        userId: currentUserId,
        message: inputText,
        msgId: Date.now(),
      };

      setChatList([...chatList, msg]);
      reset();
    } else {
      alert('Type something');
    }
  };

  const handleHeartClick = (e) => {
    e.preventDefault();

    const heartMsg = {
      userId: currentUserId,
      message: '❤️',
      msgId: Date.now(),
    };

    setChatList([...chatList, heartMsg]);
  };

  return (
    <FormWrapper>
      <Button onClick={handleHeartClick}>❤️</Button>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here"
      />
      <Button onClick={handleNewMsg}>+</Button>
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
