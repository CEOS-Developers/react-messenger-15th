import React from "react";
import styled from 'styled-components';
/*
//{state.map(({ userID, text }) => (
  //  userID === 1 ? 'Judi' : 'Nick'
    //text
*/

const MessageList = ( ) => {
    return <MessageListArea>
        <MessageListField>
            <ChatInfoWrapper>
                <Bubble>
                </Bubble>
            </ChatInfoWrapper>
        </MessageListField>
    </MessageListArea>
}

const MessageListArea = styled.div`
    width: 100%;
    height: 56%;
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const MessageListField = styled.div`
    width: 100%;
    height: 90%;
    display : flex;
    flex-direction : column;
    margin : auto; 
    font-family: sans-serif;
    align-items: flex-start;
    background: #FFFFFF;
    border-radius: 24px;
    overflow : auto;
`;

const ChatInfoWrapper = styled.div`
    margin : 4px 24px 2px 24px;
    display: flex;
    flex-direction : column;
    justify-content : left;
`;

const Bubble = styled.span`
    padding: 6px 12px;
    width : auto;
    margin: 3px;
    font-size: 12px;
    line-height: 16px;
    color : #FFFFFF;
    font-weight: 500;
    border-radius : 12px;
    background-color : #567BFF;

`;

export default MessageList;