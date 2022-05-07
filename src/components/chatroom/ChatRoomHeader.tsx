import {
  useReceiverUserIdState,
  useReceiverUserIdDispatch,
} from '../../contexts/ReceiverUserIdContext';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import friends from '../../data/friends.json';

type TChatRoomHeaderProps = {
  partnerUserId: number;
};

function ChatRoomHeader({ partnerUserId }: TChatRoomHeaderProps) {
  const receiverUserIdState = useReceiverUserIdState();
  const receiverUserIdDispatch = useReceiverUserIdDispatch();
  const handleReceiverUserIdToggle = () =>
    receiverUserIdDispatch({ type: 'TOGGLE', partnerUserId: partnerUserId });

  const receiver = friends.filter(
    (friend) => friend.userId === receiverUserIdState.receiverUserId
  )[0];

  return (
    <ChatRoomHeaderBlock>
      <Btn>
        <HiOutlineChevronLeft />
      </Btn>
      <ProfileWrapper onClick={handleReceiverUserIdToggle}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/${receiverUserIdState.receiverUserId}.jpg`}
        />
        <ReceiverUserNameWrapper>
          <span>{receiver.userName}</span>
          <HiOutlineChevronRight />
        </ReceiverUserNameWrapper>
      </ProfileWrapper>
      <Btn /> {/* Dummy */}
    </ChatRoomHeaderBlock>
  );
}

const ChatRoomHeaderBlock = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #eeeeee6d;
  border-bottom: 1px solid #e2e2e2;
`;

const Btn = styled.div`
  width: 10%;
  height: 100%;
  margin-left: 3%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.8rem;
    color: #1986fc;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ProfileWrapper = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ReceiverUserNameWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 10%;
    margin-right: 2px;

    font-size: 0.8rem;
    font-weight: 400;
    color: #3f464db2;

    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 10%;
    color: #9f9fa3bd;
  }
`;

export default ChatRoomHeader;
