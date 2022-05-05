import styled from 'styled-components';
import SingleMessage from './SingleMessage';

const MessageList = ({ currentUser, textList }: any) => {
  return (
    <ListContainer>
      <ShowList>
        {textList.map((chat: any) => (
          <SingleMessage currentUser={currentUser} chat={chat} />
        ))}
      </ShowList>
    </ListContainer>
  );
};

export default MessageList;

const ListContainer = styled.div``;
const ShowList = styled.div``;
