import styled from 'styled-components';
import { ChatType } from '../../Interface';
import ChatItem from './ChatItem';
import { useEffect, useRef } from 'react';
const RoomBody = ({ chats }: { chats: ChatType[] }) => {
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
        }
    }, [chats]);

    return (
        <RoomBodyContainer ref={bodyRef}>
            {chats.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
        </RoomBodyContainer>
    );
};

export default RoomBody;

const RoomBodyContainer = styled.div`
    padding: 0px 16px;
    overflow-y: scroll;
    background-color: #8989bb;
    background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
`;
