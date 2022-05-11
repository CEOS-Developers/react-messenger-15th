import styled, { css } from 'styled-components';
import { ChatType, RoomType, UserType } from '../../Interface';
import { timeForToday } from '../../utils/timeForToday';
import Squircle from '../user/Squircle';

const ListItem = ({ user, lastChat }: { user: UserType; lastChat?: ChatType }) => {
    const lastChatContent = lastChat?.content;
    const lastChatDate = lastChat?.date;
    return (
        <Item room={lastChat}>
            <ProfileIcon room={lastChat}>
                <Squircle imageUrl={user.profileImage} selected={false} />
            </ProfileIcon>
            <Info>
                <div>{user.userName}</div>
                <InfoSub>{lastChat ? lastChatContent : user.statusMessage}</InfoSub>
            </Info>
            {lastChatDate && <LastDate>{timeForToday(lastChatDate)}</LastDate>}
        </Item>
    );
};

export default ListItem;
const Item = styled.div<{ room: ChatType | undefined }>`
    display: flex;
    align-items: center;
    ${({ room }) =>
        room
            ? css`
                  padding: 12px 18px;
              `
            : css`
                  padding: 8px 18px;
              `}
    cursor: default;
    &:hover {
        background-color: #f7f8f8;
    }
`;

const ProfileIcon = styled.div<{ room: ChatType | undefined }>`
    margin-right: 10px;
    ${({ room }) =>
        room
            ? css`
                  width: 45px;
                  height: 45px;
              `
            : css`
                  width: 40px;
                  height: 40px;
              `}
`;

const Info = styled.div`
    font-size: 15px;
    color: black;
`;

const InfoSub = styled.div`
    color: #7f7f7f;
    font-size: 12px;
    margin-top: 2px;
    width: 100%;
    /* word-wrap: break-word; // 단어 단위로 줄바꿈
    text-align: left; // 텍스트를 가운데나 오른쪽 정렬을 하게 되면 말줄임표가 이상한 곳으로 갈 수 있음
    display: -webkit-box; // 유연하게 height를 증감시킬 수 있는 플렉스 박스형태로 변환
    -webkit-line-clamp: 2; // 보여줄 줄 수
    -webkit-box-orient: vertical; //플렉스 박스의 방향 설정(가로) */
`;

const LastDate = styled.div`
    color: #b3b3b3;
    font-size: 12px;
    margin-left: auto;
    margin-bottom: auto;
    min-width: 50px;
    text-align: right;
`;
