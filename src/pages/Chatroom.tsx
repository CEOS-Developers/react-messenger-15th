import ChatItem from '../components/chatroom/ChatItem';
import { ChatType } from '../Interface';
import * as api from '../api';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { chatState, userState } from '../store/recoil/recoil';
import { ChatDataType, UserType } from '../Interface';
import SendMessage from '../components/chatroom/SendMessage';
import RoomHeader from '../components/chatroom/RoomHeader';
import styled from 'styled-components';
import RoomBody from '../components/chatroom/RoomBody';

const ChatRoom = ({ roomId }: { roomId: number }) => {
    const chatData = useRecoilValue<ChatDataType[]>(chatState);
    const userData = useRecoilValue<UserType[]>(userState);
    const { getChats, getUserInfoListByRoomId } = api;
    const chats = getChats(roomId, chatData);
    const userList = getUserInfoListByRoomId(roomId, chatData, userData);

    return (
        <RoomContainer>
            <RoomHeader />
            <RoomBody chats={chats} />
            <SendMessage roomId={roomId} chatData={chatData} />
        </RoomContainer>
    );
};

export default ChatRoom;

const RoomContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 100px auto 120px;
`;
