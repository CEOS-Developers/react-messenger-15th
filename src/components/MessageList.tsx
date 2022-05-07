import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IChat } from '../interface/interface';
import SingleMessage from './SingleMessage';
import { Scrollbars } from 'react-custom-scrollbars';

const MessageList = ({ chatList }: { chatList: IChat[] }) => {
  const scrollbarRef = useRef<Scrollbars>(null);

  //채팅 submit시 스크롤바 아래로
  useEffect(() => {
    if (scrollbarRef.current) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatList]);

  return (
    <ListContainer>
      <Scrollbars
        renderTrackHorizontal={(props) => (
          <div
            {...props}
            style={{ display: 'none' }}
            className="track-horizontal"
          />
        )}
        style={{ overflowX: 'hidden' }}
        ref={scrollbarRef}
      >
        <ShowList>
          {chatList?.map((chat: IChat) => (
            <SingleMessage chat={chat} key={chat.id} />
          ))}
        </ShowList>
      </Scrollbars>
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
