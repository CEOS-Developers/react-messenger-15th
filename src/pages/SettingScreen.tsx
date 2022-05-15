import styled from 'styled-components';
import {
  FcEngineering,
  FcSpeaker,
  FcMoneyTransfer,
  FcApprove,
  FcLock,
} from 'react-icons/fc';

import { Content } from '../components/sharings/Elements';

const SettingScreen = () => {
  const settingMenu = [
    { id: 'menu1', title: 'Profile', icon: <FcApprove /> },
    { id: 'menu2', title: 'Privacy', icon: <FcLock /> },
    { id: 'menu3', title: 'General', icon: <FcEngineering /> },
    { id: 'menu4', title: 'Payments', icon: <FcMoneyTransfer /> },
    { id: 'menu5', title: 'Notifications', icon: <FcSpeaker /> },
  ];

  return (
    <Content>
      {settingMenu.map((menu) => (
        <MenuWrapper key={menu.id}>
          <Icon>{menu.icon}</Icon>
          <MenuTitle> {menu.title}</MenuTitle>
        </MenuWrapper>
      ))}
    </Content>
  );
};

const MenuWrapper = styled.div`
  height: 10%;
  margin-top: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const MenuTitle = styled.div`
  margin-left: 8px;
`;

export default SettingScreen;
