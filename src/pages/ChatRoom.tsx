import * as api from '../api';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { chatState, userState } from '../store/recoil';
import { RoomType, UserType } from '../Interface';
import SendMessage from '../components/chatroom/SendMessage';
import RoomHeader from '../components/chatroom/RoomHeader';
import styled from 'styled-components';
import RoomBody from '../components/chatroom/RoomBody';
import { useParams } from 'react-router-dom';

const ChatRoom = () => {
    const chatData = useRecoilValue<RoomType[]>(chatState);
    const userData = useRecoilValue<UserType[]>(userState);
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const { getChats, getUserInfoListByRoomId } = api;

    const { roomId } = useParams();
    //roomId 파람으로 받아오는데 생기는 type 오류 해결해놓기
    if (!roomId) throw new Error('파람 필요');

    const chats = getChats(parseInt(roomId), chatData);
    const users = getUserInfoListByRoomId(parseInt(roomId), chatData, userData);

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
                    <SendMessage roomId={parseInt(roomId)} chatData={chatData} userId={currentUser?.userId} />
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
