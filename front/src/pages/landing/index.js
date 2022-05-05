import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form1Style, Container, Center, Btn } from './styles';
const Landing = () => {
  const [input, setInput] = useState('');
  const [usr, setUsr] = useState('');
  const [toggle, setToggle] = useState(false);
  let navigator = useNavigate();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsr(input);
    setToggle((prev) => !prev);
  };
  const handleEnter = () => {
    navigator(`/room/${usr}`);
  };
  const handleCancle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Container>
      <div>
        <h1 style={Center}>CEOS 15 FRONT </h1>
        <h1 style={Center}>4TH STUDY </h1>
        <h3 style={Center}>messenger</h3>
      </div>
      {toggle ? (
        <>
          <Form1Style>
            대화명 [{input}]으로 입장하시겠습니까?
            <button onClick={handleEnter}>입장</button>
            <button onClick={handleCancle}>취소</button>
          </Form1Style>
        </>
      ) : (
        <Form1Style onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="대화명을 입력해주세요."
            maxLength="10"
          />
          <Btn>대화명 입력</Btn>
        </Form1Style>
      )}
    </Container>
  );
};
export default Landing;
