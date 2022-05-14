import React from "react";
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { messagesState } from '../State/Messages'

import InputSet from '../Component/Molecule/InputSet';
import Userprofile from "../Component/Molecule/Userprofile";
import Bubble from "../Component/Molecule/Bubble";

const Room3 = () => {
    const [messages , setMessages] = useRecoilState(messagesState); 
    const filteredMessageList = messages.filter(message => (message.receiverId == '3')||(message.senderId == '3'));
    const messageList = filteredMessageList.map((message) => (<Bubble senderId={message.senderId} receiverId={message.receiverId} roomId={'3'} messageText={message.messageText}></Bubble>));

    const onclick = ( e : React.FormEvent ): void => {
    }

    return (
    <PageWrapper>
        <Userprofile id={'1'} maintext={'다 고쳐 필릭스'} subtext={'다 고쳐 필릭스님과의 채팅입니다'}></Userprofile>
        <MesssageListWrapper>
            {messageList}
        </MesssageListWrapper>
        <InputSetWrapper>
            <InputSet placeholder={'메세지 보내기'} key={'send'} onclick={onclick}></InputSet>
        </InputSetWrapper> 
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
    height : calc( 100% - 160px);
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
`;

const InputSetWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    align-self: flex-start;
`;

export default Room3;