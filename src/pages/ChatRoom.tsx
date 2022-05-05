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
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const { getChats, getUserInfoListByRoomId } = api;

    const chats = getChats(roomId, chatData);
    const users = getUserInfoListByRoomId(roomId, chatData, userData);

    //user list 첫번째 인덱스로 초기화
    useEffect(() => {
        if (!currentUser) setCurrentUser(users[0]);
    }, [currentUser, users]);

    return (
        <>
            {currentUser ? (
                <RoomContainer>
                    <RoomHeader users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    <RoomBody chats={chats} users={users} currentUser={currentUser} />
                    <SendMessage roomId={roomId} chatData={chatData} userId={currentUser?.userId} />
                </RoomContainer>
            ) : null}
        </>
    );
};

export default ChatRoom;

const RoomContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 100px auto 120px;
`;
