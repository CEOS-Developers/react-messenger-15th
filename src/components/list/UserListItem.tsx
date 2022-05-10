import { UserType } from '../../Interface';
import styled from 'styled-components';
import Squircle from '../user/Squircle';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../store/recoil';
import { getRoomIdByUser } from '../../api';
const UserListItem = ({ user }: { user: UserType }) => {
    const chatData = useRecoilValue(chatState);
    const roomId = getRoomIdByUser(user.userId, chatData);
    return (
        <Link to={`/room/${roomId}`}>
            <User>
                <ProfileIcon>
                    <Squircle imageUrl={user.profileImage} selected={false} />
                </ProfileIcon>
                <ProfileInfo>
                    <div>{user.userName}</div>
                    <StatusMessage>{user.statusMessage}</StatusMessage>
                </ProfileInfo>
            </User>
        </Link>
    );
};

export default UserListItem;

const User = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 18px;
    cursor: default;
    &:hover {
        background-color: #f7f8f8;
    }
`;

const ProfileIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const ProfileInfo = styled.div`
    font-size: 15px;
    color: black;
`;

const StatusMessage = styled.div`
    color: #7f7f7f;
    font-size: 12px;
    margin-top: 2px;
`;
