import React from "react";
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { usersState } from '../../State/Users'

import SquareImage from '../Atom/SquareImage';

type Bubbleprops = {
    senderId : string
    receiverId : string
    roomId : string
    messageText : string
}

type SenderNameprops = {
    receiverId : string
    roomId : string 
}

const Bubble = ( { senderId, receiverId, roomId, messageText } : Bubbleprops ) => {
    const [users , setUsers] = useRecoilState(usersState); 
    const filteredUser = users.filter(user => user.id == senderId);

    return <ChatWrapper receiverId={receiverId} roomId={roomId}>
    <SquareImage id={senderId}/>
        <MessageTextWrapper>
            <SenderName receiverId={receiverId} roomId={roomId}>{filteredUser.map((user) => user.profileName)}</SenderName> 
            <BubbleWrapper receiverId={receiverId} roomId={roomId}>
                <MessageText>{messageText}</MessageText>
            </BubbleWrapper>
        </MessageTextWrapper>
    </ChatWrapper>
}

const ChatWrapper = styled.div<SenderNameprops>`
    display: flex;
    flex-direction : ${(SenderNameprops)=>((SenderNameprops.receiverId)!=(SenderNameprops.roomId)? 'row' : 'row-reverse')};
    align-items : space-evenly;
    justify-content : left;
    margin : 0px 20px 0px 0px;
    border : none;
    padding : 16px 0px 0px 0px;
    background-color : rgba(0,0,0,0);
    text-decoration-line : none;
    align-self: ${(SenderNameprops)=>((SenderNameprops.receiverId)!=(SenderNameprops.roomId)? 'flex-start' : 'flex-end')};
`;

const MessageTextWrapper = styled.span`
    display: div;
    text-decoration : none;
    margin : 0px 12px 0px 0px;
`;

const BubbleWrapper = styled.div<SenderNameprops>`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #999999;
    padding : 8px;
    margin : 4px 0px;
    text-align : left;
    text-decoration : none;
    border-radius : 12px;
    background-color : ${(SenderNameprops)=>((SenderNameprops.receiverId)!=(SenderNameprops.roomId)? '#567BFF' : '#EEEEEE')};
`;

const MessageText = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #000000;
    padding : 2px;
    text-align : left;
    text-decoration : none;
`;

const SenderName = styled.div<SenderNameprops>`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #999999;
    padding : 2px;
    text-align : ${SenderNameprops => (SenderNameprops.receiverId!=SenderNameprops.roomId) ? 'left' : 'right'};
    text-decoration : none;
`;

export default Bubble;