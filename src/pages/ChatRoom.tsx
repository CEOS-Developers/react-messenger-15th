import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { initializeReceiver, receiver } from '../modules/receiver';
import { initializeChatList, concatChatList } from '../modules/chatList';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useChatListDispatch } from '../contexts/ChatListContext';
import { useReceiverUserIdDispatch } from '../contexts/ReceiverUserIdContext';
import ChatRoomHeaderContainer from '../containers/chatroom/ChatRoomHeaderContainer';
import ChatRoomListContainer from '../containers/chatroom/ChatRoomListContainer';
import ChatRoomFormContainer from '../containers/chatroom/ChatRoomFormContainer';
import { convertCompilerOptionsFromJson } from 'typescript';

function ChatRoom() {
  const params = useParams();
  const partnerUserId = parseInt(params.userId!);

  // const receiverUserIdDispatch = useReceiverUserIdDispatch();
  // const initReceiverUserId = () => {
  //   console.log('init');
  //   receiverUserIdDispatch({
  //     type: 'INITIALIZE',
  //     partnerUserId: partnerUserId,
  //   });
  // };
  // useEffect(() => {
  //   initReceiverUserId();
  // });

  // useEffect(() => {
  //   console.log(receiverUserId);
  //   initializeReceiver(partnerUserId);
  // }, [partnerUserId]);

  const dispatch = useDispatch();
  const initializeReceiverTrigger = useCallback(
    (partnerUserId: any) => dispatch(initializeReceiver(partnerUserId)),
    [dispatch]
  );
  useEffect(() => {
    initializeReceiverTrigger(partnerUserId);
  }, [partnerUserId]);

  // const chatListDispatch = useChatListDispatch();
  // const initChatList = () =>
  //   chatListDispatch({ type: 'INITIALIZE', partnerUserId: partnerUserId });
  // });
  // useEffect(() => {
  //   initChatList();

  const initializeChatListTrigger = useCallback(
    (partnerUserId: any) => dispatch(initializeChatList(partnerUserId)),
    [dispatch]
  );
  useEffect(() => {
    initializeChatListTrigger(partnerUserId);
  }, [partnerUserId]);

  return (
    <ChatRoomBlock>
      <ChatRoomHeaderContainer partnerUserId={partnerUserId} />
      <ChatRoomListContainer partnerUserId={partnerUserId} />
      <ChatRoomFormContainer partnerUserId={partnerUserId} />
    </ChatRoomBlock>
  );
}

// export default connect(
//   ({ receiver }) => ({ receiverUserId: receiver.userId }),
//   {
//     initializeReceiver,
//   }
// )(ChatRoom);

export default ChatRoom;

const ChatRoomBlock = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
