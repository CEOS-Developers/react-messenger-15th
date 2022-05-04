import styled from 'styled-components';

export function ChatRoomMain() {
  return (
    <ChatRoomMainBlock>
      <ChatItem>
        <Img />
        <TextWrapper>
          <UserName>UserName</UserName>
          <InfoWrapper>
            <Bubble>Bubble</Bubble>
            <Time>Time</Time>
          </InfoWrapper>
        </TextWrapper>
      </ChatItem>
    </ChatRoomMainBlock>
  );
}

const ChatRoomMainBlock = styled.div`
  width: 100%;
  height: 75%;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    background-clip: padding-box;
    border-radius: 20px;
    border: 8px solid transparent;
  }

  /* height: 70%; */

  /* width: 100%; */
  /* overflow: auto; */

  display: flex;
  flex-direction: column;
`;

const ChatItem = styled.div`
  max-width: 95%;
  margin: 4%;

  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 10%;
  height: 10%;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 88%;

  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  width: 100%;

  font-size: 14px;
  color: #343a40;

  display: flex;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
`;

const Bubble = styled.div`
  padding: 3%;
  margin-top: 2.5%;

  font-size: 12px;
  line-height: 18px;

  display: flex;
`;

const Time = styled.div`
  color: #c8c8c8;
  font-size: 10px;
  margin: 0 2%;

  display: flex;
  align-items: end;
`;
