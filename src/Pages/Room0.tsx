import React from "react";
import styled from 'styled-components';
import UserBox from '../Component/UserBox';
import MessageList from '../Component/MessageList';
import InputBox from '../Component/InputBox';
import { MessageProvider } from '../Context/MessageContext';

const Room0 = () => {
    return (
    <BodyField>
        <AppField>
            <AppBody>
                <MessageProvider>
                <UserBox/>
                <MessageList/>
                <InputBox/>
                </MessageProvider>
            </AppBody>
        </AppField>
    </BodyField>
    );
};

const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin : auto;

    width: 50vw;
    height: 100%;
`;


const AppField = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 95%;
    margin : auto;
`;

const BodyField = styled.div`
    display : flex;
    width : 100vw;
    height : 100vh;
    background: #ECEDF0;
    
`;


export default Room0;