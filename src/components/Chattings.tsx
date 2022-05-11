import styled from 'styled-components';
import { LinkToChat, ProfileImg } from './layout/CommonStyle';

const Chattings = ({ userId, userName, message }: any) => {
  console.log(message);
  return (
    <ChattingRooms>
      <LinkToChat to={`/messengerbox/${userName}`}>
        <ProfileImg src={`/assets/${userId}.jpg`} />
        <Chat>
          <UserName>{userName}</UserName>
          <LastMessage>{message}</LastMessage>
        </Chat>
      </LinkToChat>
    </ChattingRooms>
  );
};

export default Chattings;

const ChattingRooms = styled.div``;

const UserName = styled.div``;
const LastMessage = styled.div``;
const Chat = styled.div``;
