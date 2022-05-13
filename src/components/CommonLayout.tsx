import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdOutlinePersonOutline,
  MdOutlineSettings,
  MdOutlineChatBubbleOutline,
} from 'react-icons/md';

const menus = [
  {
    destination: '',
    icon: <MdOutlinePersonOutline />,
  },
  {
    destination: 'chatroom',
    icon: <MdOutlineChatBubbleOutline />,
  },
  {
    destination: 'settings',
    icon: <MdOutlineSettings />,
  },
];

type TCommonLayoutProps = {
  headerText: string;
};

function CommonLayout({ headerText }: TCommonLayoutProps) {
  return (
    <CommonLayoutBlock>
      <header>{`${headerText}`}</header>
      <main>
        <Outlet />
      </main>
      <footer>
        {menus.map((menu) => (
          <Menu
            key={menu.destination}
            to={`/${menu.destination}`}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {menu.icon}
          </Menu>
        ))}
      </footer>
    </CommonLayoutBlock>
  );
}

const CommonLayoutBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 10%;

    padding-top: 8%;
    padding-left: 8%;
    padding-bottom: 4%;

    font-size: 1.5rem;
    font-weight: 500;
  }

  main {
    width: 100%;
    height: 88%;
  }

  footer {
    width: 100%;
    height: 11%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-top: 1px solid #e2e2e2;
  }
`;

const Menu = styled(NavLink)`
  font-size: 1.7rem;
  color: #495057;

  cursor: pointer;

  &:hover {
    color: #439bf8;
  }

  &.active {
    font-weight: 600;
    border-bottom: 3px solid #1986fc;
    color: #1986fc;

    &:hover {
      color: #1987fcb6;
    }
  }

  & + & {
    margin-left: 1.5rem;
  }

  svg {
    margin-bottom: -10%;
  }
`;

export default CommonLayout;
