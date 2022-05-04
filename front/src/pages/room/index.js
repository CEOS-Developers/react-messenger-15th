import {
  ChatBox,
  ImgBox,
  MessageBox,
  MiddleBox,
  MsgBox,
  MsgWrapper,
  NameBox,
  Time,
  TimeDiv,
  Wrapper,
  NameField,
  FormBox,
  MiddleDiv,
  BackBtn,
} from './style';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import io, { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import gravatar from 'gravatar';
const socket = io.connect(`http://localhost:3065`);
const Room = () => {
  const { id } = useParams();
  let navigator = useNavigate();
  const scrollRef = useRef();
  const [input, setInput] = useState('');
  const [messageObj, setMessageObj] = useState({});
  const [msg, setMsg] = useState();

  const createMessageObj = (id, msg) => {
    const time = new Date().toString().slice(16, -21).slice(0, 5);
    setMessageObj({ usr: id, time, msg });
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!input || !input.trim()) {
      return alert('메세지를 입력해주세요');
    }
    createMessageObj(id, input);
    setInput('');
  };
  const onClickHeart = (e) => {
    e.preventDefault();
    createMessageObj(id, '💜');
  };
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    socket.emit('send', messageObj);
  }, [messageObj]);

  useEffect(() => {
    socket.on('sendBack', (data) => {
      const cleanData = data.filter((obj) => {
        return Object.keys(obj).length !== 0;
      });

      setMsg(cleanData);
    });
    scrollToBottom();
  }, [msg]);

  return (
    <Wrapper>
      <ChatBox>
        <NameField>
          <BackBtn onClick={() => navigator('/')}>〈</BackBtn>
          <h1>[{id}]</h1>
          <h3></h3>
        </NameField>
        <MessageBox ref={scrollRef}>
          {msg?.map((m, i) => {
            return (
              <>
                {m.usr == id ? (
                  <MsgWrapper me key={i}>
                    <MiddleBox me>
                      <NameBox me>{m.usr}</NameBox>
                      <MiddleDiv me>
                        <Time>{m.time}</Time>
                        <MsgBox me>
                          <div>{m.msg}</div>
                        </MsgBox>
                      </MiddleDiv>
                    </MiddleBox>
                    <ImgBox
                      src={gravatar.url(id, {
                        s: '28px',
                        d: 'wavatar',
                      })}
                    />
                  </MsgWrapper>
                ) : (
                  <MsgWrapper key={i}>
                    <ImgBox
                      src={gravatar.url(m.usr, {
                        s: '28px',
                        d: 'wavatar',
                      })}
                    ></ImgBox>
                    <MiddleBox>
                      <NameBox>{m.usr}</NameBox>
                      <MiddleDiv>
                        <MsgBox>
                          <div>{m.msg}</div>
                        </MsgBox>
                        <Time>
                          <TimeDiv>{m.time}</TimeDiv>
                        </Time>
                      </MiddleDiv>
                    </MiddleBox>
                  </MsgWrapper>
                )}
              </>
            );
          })}
        </MessageBox>
        <FormBox>
          <input
            required
            type="text"
            placeholder="메세지 입력"
            onChange={handleInput}
            value={input}
            style={{ width: '100%' }}
            maxLength="35"
          />
          <button onClick={onSubmitForm}>+</button>
          <button onClick={onClickHeart}>💜</button>
        </FormBox>
      </ChatBox>
    </Wrapper>
  );
};
export default Room;
