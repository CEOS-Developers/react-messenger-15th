import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContains = styled.div`
  height: 4rem;
  border-bottom: 0.08rem solid #c2bbbb;
  padding: 1rem;
  line-height: 4rem;
  font-size: 25px;
  font-weight: lighter;
  width: 24rem;
`;

export const ProfileImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 70%;
`;

export const LinkToChat = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
`;
