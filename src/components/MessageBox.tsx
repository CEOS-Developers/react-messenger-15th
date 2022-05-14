import styled, { css } from 'styled-components';

import { Message, userInfo } from '../store/recoil/data';
import { useRecoilState } from 'recoil';
import { userClicked } from '../store/recoil';
import { useEffect, useState } from 'react';
import { IMsgs } from '../interfaces/data';

// @ts-ignore
function MessageBox({ message }) {
  const [user, setUser] = useRecoilState(userInfo);
  const [currentUser, setCurrentUser] = useRecoilState(userClicked);
  const [source, setSource] = useState([]);

  const findUrl = () => {
    const [a] = user.filter((u) => u.userName === currentUser);
    const [b] = user.filter((u) => u.userName === '전시원');
    const source = [b.profileImg, a.profileImg];
    // @ts-ignore
    setSource([...source]);
  };
  useEffect(() => {
    findUrl();
  }, []);

  return (
    <Container>
      {message.userName === '전시원' ? (
        <RightWrapper>
          <TimeWrapper me>{message.date}</TimeWrapper>
          <div>
            <NameWrapper me>{message.userName}</NameWrapper>
            <MsgWrapper>{message.contents}</MsgWrapper>
          </div>
          <Img me src={source[0]} />
        </RightWrapper>
      ) : (
        <>
          <Img src={source[1]} />
          <div>
            <NameWrapper>{message.userName}</NameWrapper>
            <MsgWrapper>{message.contents}</MsgWrapper>
          </div>
          <TimeWrapper>{message.date}</TimeWrapper>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  margin-bottom: 15px;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const NameWrapper = styled.div<{ me?: boolean }>`
  color: #a0a0a0;
  margin-bottom: 5px;

  text-align: ${(props) => props.me && 'right'};
`;
const MsgWrapper = styled.div`
  color: white;
  background: #383838;
  padding: 8px;
  border-radius: 5px;
`;
const TimeWrapper = styled.div<{ me?: boolean }>`
  color: #a0a0a0;
  font-size: 8px;

  display: flex;
  align-items: flex-end;

  ${({ me }) =>
    me
      ? css`
          margin-right: 5px;
        `
      : css`
          margin-left: 5px;
        `}
`;

const Img = styled.img<{ me?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${({ me }) =>
    me
      ? css`
          margin-left: 5px;
        `
      : css`
          margin-right: 5px;
        `}
`;

export default MessageBox;
