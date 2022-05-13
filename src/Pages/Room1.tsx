import React from "react";
import styled from 'styled-components';
import InputBox from '../Component/InputBox';

import InputSet from '../Component/Molecule/InputSet';
import Userprofile from "../Component/Molecule/Userprofile";

const Room1 = () => {
    const onclick = ( e : React.FormEvent ): void => {
        
    }

    return (
    <PageWrapper>
        <Userprofile id={'1'} maintext={'다 부숴 랄프'} subtext={'다 부숴 랄프님과의 채팅입니다'}></Userprofile>
        <MesssageListWrapper>
        </MesssageListWrapper>
        <SendWrapper>
        <InputSet placeholder={'검색할 이름을 입력해 주세요.'} key={'send'} onclick={onclick}></InputSet>
        </SendWrapper>
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
    justify-content : space-between;
    background: #FFFFFF;
`;

const SendWrapper = styled.div` 
    width : 100%;
    display : flex;
    font-family: sans-serif;
    align-items: flex-end;
    justify-content : space-between;
    background: #FFFFFF;
    background-color: red;
`;

export default Room1;