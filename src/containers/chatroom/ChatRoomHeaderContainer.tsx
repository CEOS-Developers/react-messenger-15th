import { toggleReceiver } from '../../modules/receiver';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useReceiverUserIdState,
  useReceiverUserIdDispatch,
} from '../../contexts/ReceiverUserIdContext';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import friends from '../../assets/json/friends.json';
import me from '../../assets/json/me.json';

type TChatRoomHeaderProps = {
  partnerUserId: number;
};

function ChatRoomHeaderContainer({
  partnerUserId,
  receiverUserId,
  toggleReceiver,
}: any) {
  // const receiverUserIdState = useReceiverUserIdState();
  // const receiverUserIdDispatch = useReceiverUserIdDispatch();
  // const handleReceiverUserIdToggle = () =>
  //   receiverUserIdDispatch({ type: 'TOGGLE', partnerUserId: partnerUserId });

  // let receiver;
  // if (receiverUserIdState.receiverUserId === me.userId) {
  //   receiver = me;
  // } else {
  //   receiver = friends.filter(
  //     (friend) => friend.userId === receiverUserIdState.receiverUserId
  //   )[0];
  // }

  let receiver;
  if (receiverUserId === me.userId) {
    receiver = me;
  } else {
    receiver = friends.filter((friend) => friend.userId === receiverUserId)[0];
  }

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <ChatRoomHeaderBlock>
      {/* <GoBackBtn onClick={goBack}>
        <HiOutlineChevronLeft />
      </GoBackBtn>
      <ProfileWrapper onClick={handleReceiverUserIdToggle}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/${receiverUserIdState.receiverUserId}.jpg`}
          alt='profile'
        />
        <ReceiverUserNameWrapper>
          <span>{receiver.userName}</span>
          <HiOutlineChevronRight />
        </ReceiverUserNameWrapper>
      </ProfileWrapper>
      <GoBackBtn /> Dummy */}
      <GoBackBtn onClick={goBack}>
        <HiOutlineChevronLeft />
      </GoBackBtn>
      <ProfileWrapper onClick={() => toggleReceiver(partnerUserId)}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/${receiver.userId}.jpg`}
          alt='profile'
        />
        <ReceiverUserNameWrapper>
          <span>{receiver.userName}</span>
          <HiOutlineChevronRight />
        </ReceiverUserNameWrapper>
      </ProfileWrapper>
      <GoBackBtn /> {/* Dummy */}
    </ChatRoomHeaderBlock>
  );
}

export default connect(
  ({ receiver }) => ({ receiverUserId: receiver.userId }),
  {
    toggleReceiver,
  }
)(ChatRoomHeaderContainer);

const ChatRoomHeaderBlock = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: -5%;
  border-bottom: 1px solid #e2e2e2;
`;

const GoBackBtn = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 1%;
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
