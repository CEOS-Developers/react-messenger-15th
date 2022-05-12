import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { chatRoomToggleState, pathInfo, userClicked } from '../../store/recoil';
import { userInfo } from '../../store/recoil/data';

function UserBox() {
  const [urlPath, setUrlPath] = useRecoilState(pathInfo);
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  const [user, setUser] = useRecoilState(userInfo);
  const [currentUser, setCurrentUser] = useRecoilState(userClicked);

  return (
    <>
      {user.map((d, i) => {
        return (
          <>
            {!d.isMe && (
              <Container
                key={i}
                onClick={() => {
                  setChatRoomToggle((prev) => !prev);
                  setCurrentUser(d.userName);
                }}
              >
                <ImgDiv>
                  <Img src={d.profileImg} />
                </ImgDiv>
                {urlPath === '' && (
                  <NickDiv>
                    <Name>{d.userName}</Name>
                    <Intro>{d.introduce}</Intro>
                  </NickDiv>
                )}
                {urlPath === 'rooms' && (
                  <NickDiv>
                    <Name>{d.userName}</Name>
                    <Intro>마지막 메세지</Intro>
                  </NickDiv>
                )}
                {urlPath === '' && <div>{d.profileMusic}</div>}
                {urlPath === 'rooms' && <div></div>}
              </Container>
            )}
          </>
        );
      })}
    </>
  );
}

const Container = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 3px;
`;
const Img = styled.img`
  border-radius: 20px;
  width: 48px;
  height: 48px;
`;
const Name = styled.div`
  color: #d7d7d7;
  font-size: 15px;
  font-weight: 800;
`;
const Intro = styled.div`
  color: #929292;
`;
const NickDiv = styled.div`
  margin-left: 10px;
  display: grid;
  grid-auto-rows: 1fr 1fr;
`;

export default UserBox;
