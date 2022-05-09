import styled from "styled-components";

const settings = ["Profile", "Notifications", "General", "Privacy", "Help"];

const SettingList = () => {
  return (
    <Container>
      {settings.map((set, idx) => (
        <ListItem key={idx}>{set}</ListItem>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 70%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;
const ListItem = styled.section`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-left: 2.5rem;
  margin-top: 2.5rem;
  :hover {
    opacity: 0.7;
    transition: 0.15s;
  }
`;

export default SettingList;
