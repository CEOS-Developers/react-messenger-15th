import styled, { css } from 'styled-components';
import { ChatType, UserType } from '../../Interface';
import { timeForToday } from '../../utils/timeForToday';

interface ChatItemProps {
    chat: ChatType;
    prevChat: ChatType;
    user: UserType;
    currentUser: UserType;
}

interface IsCurrentUserProps {
    isCurrentUser?: boolean;
    isPrevSame?: boolean;
}

const ChatItem = ({ chat, user, currentUser, prevChat }: ChatItemProps) => {
    const isCurrentUser = chat.userId === currentUser.userId;
    const isPrevSame = prevChat ? chat.userId === prevChat.userId : false;
    return (
        <ChatItemContainer isCurrentUser={isCurrentUser} isPrevSame={isPrevSame}>
            {isCurrentUser ? (
                <ChatWrapper isCurrentUser={isCurrentUser}>
                    <ChatDate>{timeForToday(chat.date)}</ChatDate>
                    <ChatBubble isCurrentUser={isCurrentUser} isPrevSame={isPrevSame}>
                        {chat.content}
                    </ChatBubble>
                </ChatWrapper>
            ) : (
                <>
                    <ProfileImage isPrevSame={isPrevSame} />
                    <div>
                        {!isPrevSame && <div style={{ color: '#333' }}>{user.userName}</div>}
                        <ChatWrapper isCurrentUser={isCurrentUser}>
                            <ChatBubble isCurrentUser={isCurrentUser} isPrevSame={isPrevSame}>
                                {chat.content}
                            </ChatBubble>
                            <ChatDate>{timeForToday(chat.date)}</ChatDate>
                        </ChatWrapper>
                    </div>
                </>
            )}
        </ChatItemContainer>
    );
};

export default ChatItem;

const ChatItemContainer = styled.div<IsCurrentUserProps>`
    ${({ isPrevSame }) =>
        isPrevSame
            ? css`
                  margin-top: none;
              `
            : css`
                  margin-top: 3%;
              `}
    ${({ isCurrentUser }) =>
        !isCurrentUser &&
        css`
            display: grid;
            grid-template-columns: 40px auto;
            grid-gap: 3%;
        `}
`;

const ProfileImage = styled.div<IsCurrentUserProps>`
    width: 40px;
    height: 40px;
    background-color: #ccc;
    border-radius: 12px;
    ${({ isPrevSame }) =>
        isPrevSame &&
        css`
            background-color: transparent;
        `}
`;

const ChatWrapper = styled.div<IsCurrentUserProps>`
    display: flex;
    ${({ isCurrentUser }) =>
        isCurrentUser
            ? css`
                  justify-content: flex-end;
              `
            : css``}
`;

const ChatBubble = styled.div<IsCurrentUserProps>`
    padding: 10px;
    white-space: pre-wrap;
    border-radius: 5px;
    margin-top: 2%;
    position: relative;
    ${({ isCurrentUser }) =>
        isCurrentUser
            ? css`
                  background-color: #fbe64d;
                  margin-left: 2%;
              `
            : css`
                  background-color: #fff;
                  margin-right: 2%;
              `};
    ${({ isPrevSame, isCurrentUser }) =>
        !isPrevSame &&
        isCurrentUser &&
        css`
            &:before {
                content: '';
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 5px solid #fbe64d;
                border-right: 5px solid transparent;
                border-top: 5px solid #fbe64d;
                border-bottom: 5px solid transparent;
                border-radius: 1px;
                right: -6px;
                top: 6px;
            }
        `}
    ${({ isPrevSame, isCurrentUser }) =>
        !isPrevSame &&
        !isCurrentUser &&
        css`
            &:before {
                content: '';
                width: 0px;
                height: 0px;
                position: absolute;
                border-left: 5px solid transparent;
                border-right: 5px solid #fff;
                border-top: 5px solid #fff;
                border-bottom: 5px solid transparent;
                left: -6px;
                top: 6px;
            }
        `}
`;
const ChatDate = styled.div`
    font-size: 8px;
    color: #333;
    display: flex;
    align-items: flex-end;
`;
