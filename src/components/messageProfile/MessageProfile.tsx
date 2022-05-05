import styled from "styled-components";
import useUser from "hooks/useUser";

const MessageProfile = () => {
  const { currentUser, toggleUser } = useUser();

  return (
    <Profile onClick={toggleUser}>
      <ProfileImg alt="profile" src={currentUser.profileImg} height={50} />
      <ProfileContent>
        <ProfileName>{currentUser.name}</ProfileName>
        <ProfileTyping>Typing...</ProfileTyping>
      </ProfileContent>
    </Profile>
  );
};

const Profile = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProfileImg = styled.img`
  border-radius: 70%;
`;
const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const ProfileName = styled.p`
  margin: 0;
  font-size: 16px;
`;
const ProfileTyping = styled.p`
  font-size: 10px;
  color: lightgrey;
  margin-top: 5px;
`;

export default MessageProfile;
