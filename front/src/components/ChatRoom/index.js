import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import MessageBox from '../MessageBox';
import { useRecoilState } from 'recoil';
import { chatRoomToggleState, userClicked } from '../../store/recoil';
import { Message, userInfo } from '../../store/recoil/data';

function ChatRoom() {
  const [text, setText] = useState('');
  const [prevUser, setPrevUser] = useState('');
  const [roomId, setRoomId] = useState(0);
  const scrollRef = useRef();
  const onChangeTextArea = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  const [currentUser, setCurrentUser] = useRecoilState(userClicked);
  const [chat, setChat] = useRecoilState(Message);
  const ToggleChatRoom = useCallback(() => {
    setChatRoomToggle((prev) => !prev);
  }, []);
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const [user, setUser] = useRecoilState(userInfo);

  const [url, setUrl] = useState('');
  const toggleImg = () => {
    const [url] = user.filter((u) => u.userName === currentUser);
    setUrl(url.profileImg);
  };
  useEffect(() => {
    toggleImg();
  }, [currentUser]);

  const pickUser = (name) => {
    switch (name) {
      case '침착맨bde':
        return 0;
      case '주호민qwt':
        return 1;
      case '김풍zxcv':
        return 2;
      case '태완씨liup':
        return 3;
      case '슈말코qwejrl':
        return 4;
      default:
        return null;
    }
  };
  useEffect(() => {
    setRoomId(pickUser(currentUser));
  }, []);
  const onClickImage = () => {
    if (currentUser !== '전시원') {
      setPrevUser(currentUser);
      setCurrentUser('전시원');
    } else {
      setCurrentUser(prevUser);
    }
  };

  // when press 'enter', then form submit
  // when press 'shift+enter', then change line
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) {
        e.preventDefault();
        const date =
          String(new Date().getHours()).padStart(2, '0') +
          ':' +
          String(new Date().getMinutes()).padStart(2, '0');
        if (text === '\n') {
          return setText('');
        }
        const obj = {
          userName: currentUser,
          contents: text,
          date,
        };

        const [room] = chat.filter((room) => room.roomId === roomId);
        const newRoom = { ...room, msgs: [...room.msgs, obj] };

        setChat(chat.map((room) => (room.roomId === roomId ? newRoom : room)));

        setText('');
      }
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <Container>
      <ChatRoomHeader>
        <CircleWrapper>
          <Cir1 onClick={ToggleChatRoom}>X</Cir1>
          <Cir2 />
          <Cir3 />
        </CircleWrapper>
        <UserImg>
          <Img src={url} alt={currentUser} onClick={onClickImage} />
        </UserImg>
      </ChatRoomHeader>
      <ChatContents ref={scrollRef}>
        {chat[roomId]?.msgs.map((m, i) => {
          return <MessageBox key={i} message={m} />;
        })}
      </ChatContents>
      <FormWrapper>
        <ChatForm>
          <ChatTextArea
            onChange={onChangeTextArea}
            value={text}
            onKeyUp={onKeyUp}
            type="text"
            required
          />
          <Btn disabled>전송</Btn>
        </ChatForm>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  left: 75px;
  width: 300px;
  height: 350px;
  background: gray;
  display: grid;
  grid-template-rows: 70px 210px 70px;
  border-radius: 10px;
`;

const ChatRoomHeader = styled.div`
  background: #2e2e2e;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
const Btn = styled.button`
  background: #2d2d2d;
  border: 1px solid #373737;
  color: #6b6b6b;
  border-radius: 5px;
`;

const UserImg = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChatContents = styled.div`
  overflow: scroll;
  height: 100%;
  padding: 5px;
  background: #191919;
`;
const ChatForm = styled.form`
  display: grid;
  grid-template-columns: 7fr 3fr;
  height: 100%;
`;
const ChatTextArea = styled.textarea`
  width: 100%;
  background: #262626;
  border: none;
  color: white;
  &:focus {
    outline: none;
  }
`;

const FormWrapper = styled.div`
  padding: 5px;
  background: #262626;
  border: 1px solid #404040;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CircleWrapper = styled.div`
  display: flex;
  padding: 5px;
`;

export const Cir1 = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background: indianred;
  border: 1px solid indianred;
  border-radius: 50%;
  margin-right: 5px;
  color: black;
  font-size: 10px;
  text-align: center;
`;

export const Cir2 = styled.div`
  width: 15px;
  height: 15px;
  background: yellow;
  border: 1px solid yellow;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Cir3 = styled.div`
  width: 15px;
  height: 15px;
  background: green;
  border: 1px solid green;
  border-radius: 50%;
  margin-right: 5px;
`;

export default ChatRoom;
