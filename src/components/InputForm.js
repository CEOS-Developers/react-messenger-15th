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
    <Form>
      <Button onClick={handleHeartClick}>❤️</Button>
      <Input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something here"
      />
      <Button onClick={handleNewMsg}>+</Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
