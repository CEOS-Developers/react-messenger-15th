import { chatBox, messageBox } from './style';
import { useParams } from 'react-router';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
// const socket = io.connect(`http://localhost:3065`);
const Room = () => {
  const { id } = useParams();

  const [input, setInput] = useState('');
  const [msgFront, setMsgFront] = useState([]);
  const [msgBack, setMsgBack] = useState([]);
  const createMessageObj = (id, msg) => {
    const temp = new Date();
    const time = JSON.stringify(temp).slice(12, 17);
    return {
      usr: id,
      time,
      msg,
    };
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const obj = createMessageObj(id, input);
    setMsgFront((prev) => [...prev, obj]);
    setInput('');
  };
  useEffect(() => {
    console.log(msgFront);
  }, [msgFront]);

  return (
    <div>
      <div style={chatBox}>
        <form onSubmit={onSubmitForm}>
          <input
            required
            type="text"
            placeholder="메세지 입력"
            onChange={handleInput}
            value={input}
          />
          <button>전송</button>
          <button>💜</button>
        </form>
        <div style={messageBox}>
          {msgFront.map((msg, index) => {
            return (
              <div key={index}>
                {msg.usr} : {msg.msg} {msg.time}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Room;
