import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import SingleMessage from './SingleMessage';
import { IMessageData } from '../../interface/interface';

const MessageList = ({ messageData }: { messageData: Array<IMessageData> }) => {
  const scrollbarRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollTop = scrollbarRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageData]);

  return (
    <ListContainer ref={scrollbarRef}>
      <ShowList>
        {messageData.map((chat: IMessageData) => (
          <SingleMessage chat={chat} key={chat.userId} />
        ))}
      </ShowList>
    </ListContainer>
  );
};

export default MessageList;

const ListContainer = styled.div`
  height: 26rem;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
`;
const ShowList = styled.div``;
