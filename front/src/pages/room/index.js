import { chatBox, messageBox } from './style';
import io from 'socket.io-client';
const socket = io.connect(`http://localhost:3065`);
const Room = () => {
  return (
    <div>
      <div style={chatBox}>
        <form action="">
          <input required type="text" placeholder="메세지 입력" />
          <button>전송</button>
          <button>💜</button>
        </form>
        <div style={messageBox}></div>
      </div>
    </div>
  );
};
export default Room;
