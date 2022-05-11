import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLock } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import UnderNavBar from '../components/layout/UnderNavBar';
import { HeaderContains } from '../components/layout/CommonStyle';

const Setting = () => {
  return (
    <>
      <SettingContainer>
        <HeaderContains>Setting</HeaderContains>
        <Content>
          <SettingButton>
            <CgProfile />
            Profile
          </SettingButton>
          <SettingButton>
            <AiOutlineLock />
            Privacy
          </SettingButton>
          <SettingButton>
            <FiSettings />
            General
          </SettingButton>
          <SettingButton>
            <MdPayment />
            Payments
          </SettingButton>
        </Content>
        <UnderNavBar />
      </SettingContainer>
    </>
  );
};

export default Setting;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

const SettingButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem;
  width: 8rem;
`;
