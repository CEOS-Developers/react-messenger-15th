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
  ButtonStyle,
  Input,
} from './style';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import io, { Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import gravatar from 'gravatar';
import { IUserInfo } from 'interface';
const socket = io(`http://localhost:3065`);
const Room = () => {
  const { id } = useParams();
  let navigator = useNavigate();
  const scrollRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const [messageObj, setMessageObj] = useState({});
  const [msg, setMsg] = useState([]);

  const createMessageObj = (id?: string, msg?: string) => {
    const time = new Date().toString().slice(16, -21).slice(0, 5);
    setMessageObj({ usr: id, time, msg });
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (!input || !input.trim()) {
      return alert('메세지를 입력해주세요');
    }
    createMessageObj(id, input);
    setInput('');
  };
  const onClickHeart = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
      const cleanData = data.filter((obj: IUserInfo) => {
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
          {msg?.map((m: IUserInfo, i) => {
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
                      src={gravatar.url('', {
                        s: '28px',
                        d: '404',
                      })}
                    />
                  </MsgWrapper>
                ) : (
                  <MsgWrapper key={i}>
                    <ImgBox
                      src={gravatar.url('', {
                        s: '28px',
                        d: '404',
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
          <ButtonStyle onClick={onSubmitForm}>+</ButtonStyle>
          <Input
            required
            type="text"
            placeholder="메세지 입력"
            onChange={handleInput}
            value={input}
            style={{ width: '100%' }}
          />
          <ButtonStyle onClick={onClickHeart}>💜</ButtonStyle>
        </FormBox>
      </ChatBox>
    </Wrapper>
  );
};
export default Room;
