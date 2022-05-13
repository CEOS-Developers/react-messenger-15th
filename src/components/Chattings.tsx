import styled from 'styled-components';
import {
  LinkToChat,
  ListItem,
  ProfileImg,
  UserName,
} from './layout/CommonStyle';
const Chattings = ({ userId, userName, message }: any) => {
  return (
    <ChattingRooms>
      <LinkToChat to={`/messengerbox/${userName}`}>
        <ProfileImg src={`/assets/${userId}.jpg`} />
        <ListItem>
          <UserName>{userName}</UserName>
          <LastMessage>{message}</LastMessage>
        </ListItem>
      </LinkToChat>
    </ChattingRooms>
  );
};

export default Chattings;

const ChattingRooms = styled.div`
  display: flex;
  padding-left: 1rem;
  margin: 0.5rem;
`;

const LastMessage = styled.div`
  font-weight: lighter;
  font-size: 14px;
`;
