import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContains = styled.div`
  height: rem;
  border-bottom: 0.08rem solid #c2bbbb;
  padding: 1.5rem;
  line-height: 4rem;
  font-size: 25px;
  font-weight: lighter;
  border-width: 100%;
  justify-content: flex-start;
`;

export const HeaderText = styled.span`
  padding-left: 0.5rem;
`;
export const ProfileImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 70%;
  margin: 0.5rem;
`;

export const LinkToChat = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
`;

export const UserName = styled.div`
  padding-bottom: 0.2rem;
  font-size: 15px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
