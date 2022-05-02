import styled from "styled-components";
import useToggleUser from "hooks/useUser";

const MessageProfile = () => {
  const { currentUser, toggleUser } = useToggleUser();

  const _handleToggleUser = (): void => {
    toggleUser(currentUser.name);
  };

  return (
    <Wrapper>
      <BackButton>
        <BackButtonImg alt="backbutton" src="backbutton.png" height={12} />
      </BackButton>
      <Profile onClick={_handleToggleUser}>
        <ProfileImg alt="profile" src="profile.png" height={50} />
        <ProfileContent>
          <ProfileName>{currentUser.name}</ProfileName>
          <ProfileTyping>Typing...</ProfileTyping>
        </ProfileContent>
      </Profile>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 120px;
  border-bottom: 1px solid lightgrey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const BackButtonImg = styled.img`
  cursor: pointer;
`;
const Profile = styled.section`
  height: 100%;
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
