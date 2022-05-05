import styled from 'styled-components';
import { ChatType } from '../../Interface';
import ChatItem from './ChatItem';
import { useEffect, useRef, useState } from 'react';
const RoomBody = ({ chats }: { chats: ChatType[] }) => {
    const [scrollButtonVisible, setScrollButtonVisible] = useState<boolean>(false);
    const [scrollBarVisible, setScrollBarVisible] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
        }
    }, [chats]);

    const handleScrollY = () => {
        if (bodyRef.current) {
            const roomBodyScrollY = bodyRef.current.scrollHeight - bodyRef.current.scrollTop;
            if (roomBodyScrollY > 1000) {
                console.log('visible');
                setScrollButtonVisible(true);
            } else {
                console.log('hide');
                setScrollButtonVisible(false);
            }
        }

        setScrollBarVisible(true);
        setTimeout(() => {
            setScrollBarVisible(false);
        }, 500);
    };

    const goToBottom = () => {
        if (bodyRef.current) {
            bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
        }
    };

    return (
        <RoomBodyContainer ref={bodyRef} onScroll={handleScrollY}>
            {chats.map((chat: ChatType) => (
                <ChatItem chat={chat} key={chat.chatId} />
            ))}
            {scrollButtonVisible ? <GoToBottom onClick={goToBottom} /> : null}
        </RoomBodyContainer>
    );
};

export default RoomBody;

const RoomBodyContainer = styled.div`
    padding: 0px 16px;
    overflow-y: scroll;
    background-color: #8989bb;
    background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
    position: relative;
`;

const GoToBottom = styled.button`
    position: sticky;
    bottom: 30px;
    float: right;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0 0 10px;
`;
