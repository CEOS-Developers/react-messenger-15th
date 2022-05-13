import React from "react";
import styled from 'styled-components';
/*
//{state.map(({ userID, text }) => (
  //  userID === 1 ? 'Judi' : 'Nick'
    //text
*/

const MessageList = ( ) => {
    return <ChatInfoWrapper>
                <Bubble>
                </Bubble>
            </ChatInfoWrapper>
}




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