import React from "react";
import styled from 'styled-components';
import { useMessageState, useMessageDispatch } from '../Context/MessageContext';

/*
type MessageListProps = {
    };*/
    
const MessageList = ( ) => {
    const state = useMessageState();
    //const dispatch = useMessageDispatch();

return (
    <div>
        <MessageListField>
        {state.map(({ userID, text }) => (<>
            <ProfileImg src={`./imgs/0.png`} />
            <UserName>
                {userID === 1 ? 'Judi' : 'Nick'}
            </UserName>
            <ChatInfoWrapper>
                <Bubble>{text}</Bubble>
            </ChatInfoWrapper>
            </>
        ))}
        </MessageListField>
    </div>);
};
        
const MessageListField = styled.div`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

const ProfileImg = styled.img`
    width: 10%;
    height: 10%;
    border-radius: 50%;
    object-fit: cover;
`;
        
const UserName = styled.div`
    width: 100%;
    font-size: 14px;
    color: #343a40;
    display: flex;
`;

const ChatInfoWrapper = styled.div`
    width: 100%;
    display: flex;
`;

const Bubble = styled.div`
    padding: 3%;
    margin-top: 2.5%;
    font-size: 12px;
    line-height: 18px;
    display: flex;

`;

export default MessageList;