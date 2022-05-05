import styled from 'styled-components';
import { IChat } from '../interface/interface';
import SingleMessage from './SingleMessage';

const MessageList = ({ chatList }: { chatList: IChat[] }) => {
  return (
    <ListContainer>
      <ShowList>
        {chatList.map((chat: IChat) => (
          <SingleMessage chat={chat} />
        ))}
      </ShowList>
    </ListContainer>
  );
};

export default MessageList;

const ListContainer = styled.div``;
const ShowList = styled.div``;
