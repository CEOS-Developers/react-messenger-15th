import React from 'react';
import styled from 'styled-components';

const SettingsWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Settings = () => {
  return (
    <SettingsWrapper>
      <div>Page: Settings</div>
    </SettingsWrapper>
  );
};

export default Settings;
