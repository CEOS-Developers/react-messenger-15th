import styled from "styled-components";
import { Link } from "react-router-dom";
import { IList } from "interface";

const List = ({ link, img, title, subTitle }: IList) => {
  return (
    <ListItem to={"/chatRoom/" + link}>
      <ProfileImgBox>
        <ProfileImg alt="profile" src={`images/${img}.jpg`} height={50} />
      </ProfileImgBox>
      <ListContent>
        <ListTitle>{title}</ListTitle>
        <ListSubTitle>{subTitle}</ListSubTitle>
      </ListContent>
    </ListItem>
  );
};

const ListContent = styled.section`
  margin: 1rem;
`;
const ListItem = styled(Link)`
  display: flex;
  height: 5rem;
  text-decoration: none;
  cursor: pointer;
  :hover {
    ${ListContent} {
      opacity: 0.7;
      transition: 0.15s;
    }
  }
`;
const ListTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: black;
`;
const ListSubTitle = styled.p`
  margin-top: 0;
  font-size: 0.7rem;
  display: block;
  width: 15rem;
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProfileImgBox = styled.section`
  display: flex;
  align-items: center;
`;
const ProfileImg = styled.img`
  border-radius: 70%;
  margin-left: 1rem;
`;

export default List;
