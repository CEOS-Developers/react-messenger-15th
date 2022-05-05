import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form1Style, Container, Center, Btn, H1, H3, Input } from './styles';
const Landing = () => {
  const [input, setInput] = useState('');
  const [usr, setUsr] = useState('');
  const [toggle, setToggle] = useState(false);
  let navigator = useNavigate();
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
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
        <H1>CEOS 15 FRONT </H1>
        <H1>4TH STUDY </H1>
        <H3>messenger</H3>
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
          <Input
            required
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="대화명을 입력해주세요."
          />
          <Btn>대화명 입력</Btn>
        </Form1Style>
      )}
    </Container>
  );
};
export default Landing;
