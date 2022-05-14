import React from "react";
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { messagesState } from '../State/Messages'

import InputSet from '../Component/Molecule/InputSet';
import Userprofile from "../Component/Molecule/Userprofile";
import Bubble from "../Component/Molecule/Bubble";

const Room2 = () => {
    const [messages , setMessages] = useRecoilState(messagesState); 
    const filteredMessageList = messages.filter(message => (message.receiverId == '2')||(message.senderId == '2'));
    const messageList = filteredMessageList.map((message) => (<Bubble senderId={message.senderId} roomId={'2'} receiverId={message.receiverId} messageText={message.messageText}></Bubble>));

    const onclick = ( e : React.FormEvent ): void => {
    }

    return (
    <PageWrapper>
        <Userprofile id={'2'} maintext={'칼훈 병장'} subtext={'칼훈 병장님과의 채팅입니다'}></Userprofile>
        <MessageListWrapper>
            {messageList}
        </MessageListWrapper>
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

const MessageListWrapper = styled.div` 
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

export default Room2;