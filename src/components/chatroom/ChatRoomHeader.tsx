import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLeft } from 'react-icons/ai';

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
  // tmp receiver
  const tmpReceiverUserId = 'user1';
  const receiver = friends.filter(
    (friend) => friend.userId === tmpReceiverUserId
  )[0];
  const [receiverUserName, setReceiverUserName] = useState(receiver.userName);

  // receriverUserId
  const handleToggleReceiver = () => {
    receiverUserId === 'user0'
      ? setReceiverUserId('user1')
      : setReceiverUserId('user0');

    receiverUserId === 'user0'
      ? setReceiverUserName(receiver.userName)
      : setReceiverUserName(me.userName);
  };

  return (
    <ChatRoomHeaderBlock>
      <Button>
        <AiOutlineLeft />
      </Button>

      <ProfileWrapper onClick={handleToggleReceiver}>
        <Img src={`${process.env.PUBLIC_URL}/imgs/${receiverUserId}.jpg`} />
        <TextWrapper>
          <CurrentUserName>{receiverUserName}</CurrentUserName>
          <Typing>To</Typing>
        </TextWrapper>
      </ProfileWrapper>

      <Button />
    </ChatRoomHeaderBlock>
  );
}

const ChatRoomHeaderBlock = styled.header`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */

  border-bottom: 1px solid #e2e2e2;

  display: flex;
  justify-content: 'space-evenly';
`;

const ProfileWrapper = styled.div`
  width: 40%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  width: 56%;
  height: 75%;

  display: flex;
  flex-direction: column;
`;

const CurrentUserName = styled.div`
  width: 100%;
  height: 50%;
  font-size: 16px;

  display: flex;
  align-items: center;
`;

const Typing = styled.div`
  width: 100%;
  height: 50%;

  font-size: 12px;
  color: #c8c8c8;
`;

const Button = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 12%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
