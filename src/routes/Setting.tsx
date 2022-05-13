import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLock } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import UnderNavBar from '../components/layout/UnderNavBar';
import { HeaderContains, HeaderText } from '../components/layout/CommonStyle';
import { AiOutlineSetting } from 'react-icons/ai';

const Setting = () => {
  return (
    <>
      <SettingContainer>
        <HeaderContains>
          <AiOutlineSetting size={20} />
          <HeaderText>Setting</HeaderText>
        </HeaderContains>
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
