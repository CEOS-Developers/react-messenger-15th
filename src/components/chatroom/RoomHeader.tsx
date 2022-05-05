import styled from 'styled-components';
import { UserType } from '../../Interface';
import { Dispatch, SetStateAction } from 'react';
import Squircle from '../user/Squircle';
interface RoomHeaderProps {
    users: UserType[];
    currentUser: UserType;
    setCurrentUser: Dispatch<SetStateAction<UserType | null>>;
}

const RoomHeader = ({ users, currentUser, setCurrentUser }: RoomHeaderProps) => {
    return (
        <RoomHeaderContainer>
            <CurrentSelecter>
                {users.map((user) => (
                    <UserIcon onClick={() => setCurrentUser(user)}>
                        {currentUser.userId === user.userId && <SelectedIcon>선택 중</SelectedIcon>}
                        <Squircle imageUrl={user.profileImage} selected={currentUser.userId === user.userId} />

                        <div style={{ fontSize: '8px', textAlign: 'center' }}>{user.userName}</div>
                    </UserIcon>
                ))}
            </CurrentSelecter>
        </RoomHeaderContainer>
    );
};

export default RoomHeader;

const RoomHeaderContainer = styled.div`
    background-color: #fff;
    @media screen and (min-width: 600px) {
        border-radius: 15px 15px 0px 0px;
    }
    display: flex;
    align-items: center;
`;

const CurrentSelecter = styled.div`
    display: flex;
`;

const UserIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 16px;
    position: relative;
`;
const SelectedIcon = styled.div`
    position: absolute;
    color: white;
    font-size: 6px;
    top: 20px;
    left: 10px;
`;
