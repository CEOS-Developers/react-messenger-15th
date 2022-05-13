import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
  chatRoomToggleState,
  pathInfo,
  searchValue,
  userClicked,
} from '../../store/recoil';

function SearchUserBox() {
  const [urlPath, setUrlPath] = useRecoilState(pathInfo);
  const [chatRoomToggle, setChatRoomToggle] =
    useRecoilState(chatRoomToggleState);
  const [searchVal, setSearchVal] = useRecoilState(searchValue);
  const [currentUser, setCurrentUser] = useRecoilState(userClicked);

  return (
    <>
      {searchVal ? (
        searchVal.map((d, i) => {
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
                      <Intro>{d.last}</Intro>
                    </NickDiv>
                  )}
                  {urlPath === '' && <div>{d.profileMusic}</div>}
                  {urlPath === 'rooms' && <div></div>}
                </Container>
              )}
            </>
          );
        })
      ) : (
        <NoWrapper>
          <h3>검색결과 없음.</h3>
        </NoWrapper>
      )}
    </>
  );
}
const NoWrapper = styled.div`
  text-align: center;
`;

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
  color: black;
  font-size: 15px;
  font-weight: 800;
`;
const Intro = styled.div`
  color: black;
`;
const NickDiv = styled.div`
  margin-left: 10px;
  display: grid;
  grid-auto-rows: 1fr 1fr;
`;

export default SearchUserBox;
