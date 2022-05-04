import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div>
      {toggle ? (
        <>
          <form>
            대화명 [{input}]으로 입장하시겠습니까?
            <button onClick={handleEnter}>입장</button>
            <button onClick={handleCancle}>취소</button>
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="대화명을 입력해주세요."
            maxLength="10"
          />
          <button>대화명 입력</button>
        </form>
      )}
    </div>
  );
};
export default Landing;
