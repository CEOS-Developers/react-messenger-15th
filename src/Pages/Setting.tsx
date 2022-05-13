import React from "react";
import styled from 'styled-components';

import Userprofile from "../Component/Molecule/Userprofile";

const Setting = () => {
    return (
    <PageWrapper>
        <PageName>설정</PageName>
        <UserListWrapper>
            <Userprofile id={'Notice'} maintext={'공지'} subtext={'버전 1.1.2 업데이트 안내'}></Userprofile>
            <Userprofile id={'Emoticon'} maintext={'이모티콘'} subtext={'바들바들 동물콘'}></Userprofile>
            <Userprofile id={'Settings'} maintext={'설정'} subtext={'어플리케이션 설정'}></Userprofile>
            <Userprofile id={'Help'} maintext={'도움말'} subtext={'FAQ'}></Userprofile>
        </UserListWrapper>
    </PageWrapper>
    );
};

const PageName = styled.div`
    width: 100%;
    font-weight : 700;
    font-size : 20px;
`;

const PageWrapper = styled.div`
    width : 100%;
    height: 100%;
    margin: 20px 20px 20px 20px;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const UserListWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    justify-content : center;
    background: #FFFFFF;
`;

export default Setting;