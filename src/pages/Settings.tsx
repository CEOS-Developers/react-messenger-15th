import {
  BiNotification,
  BiUser,
  BiFingerprint,
  BiCommentDots,
  BiCreditCard,
} from 'react-icons/bi';
import styled from 'styled-components';

function Settings() {
  const menus = [
    { title: 'Profile', icon: <BiUser /> },
    { title: 'Notifications', icon: <BiNotification /> },
    { title: 'Privacy', icon: <BiFingerprint /> },
    { title: 'Payments', icon: <BiCreditCard /> },
    { title: 'General', icon: <BiCommentDots /> },
  ];

  return (
    <SettingsBlock>
      {menus.map((menu) => (
        <Menu key={menu.title}>
          <div className='Icon'>{menu.icon}</div>
          <span> {menu.title}</span>
        </Menu>
      ))}
    </SettingsBlock>
  );
}

export default Settings;

const SettingsBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 4%;
  border-top: 1px solid #e2e2e2;
`;

const Menu = styled.div`
  height: 15%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
  }

  .Icon {
    width: 25px;
    height: 25px;
    margin-left: 8%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #2f2f2f;
      flex: 1;
      font-size: 2rem;
    }
  }

  span {
    color: #2f2f2f;
    flex: 1;
    padding-left: 6%;
    font-size: 1.2rem;
  }
`;
