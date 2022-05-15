import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

type TProps = {
  userId: number;
  userName: string;
};

const FriendItem = ({ userId, userName }: TProps) => {
  return (
    <FriendItemBlock>
      <StyledLink to={`/chatroom/${userId}`}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/${userId}.jpg`}
          alt='profile'
        />
        <span>{userName}</span>
      </StyledLink>
    </FriendItemBlock>
  );
};

export default React.memo(FriendItem);

const FriendItemBlock = styled.div`
  width: 100%;
  height: 19.5%;
  padding-left: 8%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: #c4c4c41d;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;

  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit: cover;
  }

  span {
    width: 100%;
    margin-left: 5%;
    color: #343a40;
  }
`;
