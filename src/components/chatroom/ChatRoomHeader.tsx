import styled from 'styled-components';
import { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import me from '../../assets/me.json';
import friends from '../../assets/friends.json';

type CharRoomHeaderProps = {
  receiverUserId: string;
  setReceiverUserId: (receiverUserId: string) => void;
};

export function ChatRoomHeader({
  receiverUserId,
  setReceiverUserId,
}: CharRoomHeaderProps) {
  const receiver = friends.filter(
    (friend) => friend.userId === receiverUserId
  )[0];
  const [receiverUserName, setReceiverUserName] = useState(receiver.userName);

  const handleToggleReceiver = () => {
    if (receiverUserId === me.userId) {
      setReceiverUserId(receiverUserId);
      setReceiverUserName(receiver.userName);
    } else {
      setReceiverUserId(me.userId);
      setReceiverUserName(me.userName);
    }
  };

  return (
    <ChatRoomHeaderBlock>
      <Btn>
        <HiOutlineChevronLeft />
      </Btn>
      <ProfileWrapper onClick={handleToggleReceiver}>
        <img src={`${process.env.PUBLIC_URL}/imgs/${receiverUserId}.jpg`} />
        <ReceiverUserNameWrapper>
          <span>{receiverUserName}</span>
          <HiOutlineChevronRight />
        </ReceiverUserNameWrapper>
      </ProfileWrapper>
      <Btn />
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
`;

const ReceiverUserNameWrapper = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-top: 10%;
    color: #9f9fa3bd;
  }

  span {
    margin-top: 10%;
    margin-right: 2px;

    font-size: 0.8rem;
    font-weight: 400;
    color: #3f464db2;

    display: flex;
    align-items: center;
  }
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
`;
