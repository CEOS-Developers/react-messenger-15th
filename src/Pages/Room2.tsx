import React from "react";
import styled from 'styled-components';
import UserBox from '../Component/UserBox';
import InputBox from '../Component/InputBox';

import Userprofile from "../Component/Molecule/Userprofile";

const Room2 = () => {
    return (
    <PageWrapper>
        <Userprofile id={'2'} maintext={'칼훈 병장'} subtext={'칼훈 병장님과의 채팅입니다'}></Userprofile>
        <MesssageListWrapper>
        </MesssageListWrapper>
    </PageWrapper>
    );
};

const PageName = styled.div`
    width: 100%;
    font-weight : 700;
    font-size : 20px;
    margin : 0px 20px 0px 0px;
`;

const PageWrapper = styled.div`
    width : 100%;
    height: 100%;
    margin: 0px 20px 20px 20px;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const MesssageListWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    justify-content : center;
    background: #FFFFFF;
`;

export default Room2;