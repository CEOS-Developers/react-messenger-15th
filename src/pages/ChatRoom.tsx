import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { initReceiver } from '../modules/receiver';
import { initChats } from '../modules/chats';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ChatRoomHeaderContainer from '../containers/chatroom/ChatRoomHeaderContainer';
import ChatRoomMainContainer from '../containers/chatroom/ChatRoomMainContainer';
import ChatRoomFormContainer from '../containers/chatroom/ChatRoomFormContainer';

function ChatRoom() {
  const params = useParams();
  const partnerUserId = parseInt(params.userId!);

  const dispatch = useDispatch();
  const initReceiverTrigger = useCallback(
    (partnerUserId: number) => dispatch(initReceiver(partnerUserId)),
    [dispatch]
  );
  useEffect(() => {
    initReceiverTrigger(partnerUserId);
  });

  const initializeChatsTrigger = useCallback(
    (partnerUserId: number) => dispatch(initChats(partnerUserId)),
    [dispatch]
  );
  useEffect(() => {
    initializeChatsTrigger(partnerUserId);
  });

  return (
    <ChatRoomBlock>
      <ChatRoomHeaderContainer partnerUserId={partnerUserId} />
      <ChatRoomMainContainer partnerUserId={partnerUserId} />
      <ChatRoomFormContainer partnerUserId={partnerUserId} />
    </ChatRoomBlock>
  );
}

const ChatRoomBlock = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export default React.memo(ChatRoom);
