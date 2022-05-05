import styled from 'styled-components';
import { ChatType, UserType } from '../../Interface';
import ChatItem from './ChatItem';
import { useEffect, useRef, useState } from 'react';
import { getUserInfoById } from '../../api';

interface RoomBodyProps {
    chats: ChatType[];
    users: UserType[];
    currentUser: UserType;
}

const RoomBody = ({ chats, users, currentUser }: RoomBodyProps) => {
    const [scrollButtonVisible, setScrollButtonVisible] = useState<boolean>(false);
    //const [scrollBarVisible, setScrollBarVisible] = useState<boolean>(false);

    const bodyRef = useRef<HTMLDivElement>(null);

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

        /* setScrollBarVisible(true);
        setTimeout(() => {
            setScrollBarVisible(false);
        }, 500); */
    };

    const goToBottom = () => {
        if (bodyRef.current) {
            bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
        }
    };

    useEffect(() => {
        goToBottom();
    }, [chats]);

    const handleClickGoToBottom = () => {
        goToBottom();
    };

    return (
        <RoomBodyContainer ref={bodyRef} onScroll={handleScrollY}>
            {chats.map((chat: ChatType, index: number) => (
                <ChatItem
                    chat={chat}
                    prevChat={chats[index - 1]}
                    key={chat.chatId}
                    user={getUserInfoById(chat.userId, users)}
                    currentUser={currentUser}
                />
            ))}
            {scrollButtonVisible ? <GoToBottom onClick={handleClickGoToBottom} /> : null}
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
