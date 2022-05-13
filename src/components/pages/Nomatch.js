import React from 'react';
import styled from 'styled-components';

import img_notfound from '../../assets/img_notfound.gif';

const NomatchWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NomatchImg = styled.img`
  width: 320px;
  height: auto;

  margin-top: 32px;

  border-radius: 18px;
`;

const NomatchTitle = styled.div`
  margin-top: 32px;

  font-size: 24px;
  font-weight: 800;
  color: #ffa440;
`;

const NomatchContent = styled.div`
  margin-top: 4px;

  font-size: 12px;
  font-weight: 300;
  color: #666666;
`;

const Nomatch = () => {
  return (
    <NomatchWrapper>
      <NomatchImg src={img_notfound} />
      <NomatchTitle>404 NOT FOUND</NomatchTitle>
      <NomatchContent>찾는 페이지가 없습니다...</NomatchContent>
    </NomatchWrapper>
  );
};

export default Nomatch;
