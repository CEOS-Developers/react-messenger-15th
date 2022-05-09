import styled from "styled-components";
import { IChatListItem } from "interface";

const ChatListItem = ({ msgInfo }: IChatListItem) => {
  return (
    <ListItem>
      <ProfileImgBox>
        <ProfileImg
          alt="profile"
          src={`profile/${msgInfo.user.name}.jpg`}
          height={50}
        />
      </ProfileImgBox>
      <ListContent>
        <ListUser>{msgInfo.user.name}</ListUser>
        <ListText>
          {msgInfo.messages[msgInfo.messages.length - 1].text}
        </ListText>
      </ListContent>
    </ListItem>
  );
};

const ListItem = styled.section`
  display: flex;
  height: 5rem;
  cursor: pointer;
`;
const ListContent = styled.section`
  margin: 1rem;
`;
const ListUser = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
const ListText = styled.p`
  margin-top: 0;
  font-size: 0.7em;
  display: block;
  width: 15rem;
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

export default ChatListItem;
