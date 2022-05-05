import styled from 'styled-components';
import { UserType } from '../../Interface';
import { Dispatch, SetStateAction } from 'react';

interface RoomHeaderProps {
    users: UserType[];
    currentUser: UserType | null;
    setCurrentUser: Dispatch<SetStateAction<UserType | null>>;
}

const RoomHeader = ({ users, currentUser, setCurrentUser }: RoomHeaderProps) => {
    return <RoomHeaderContainer></RoomHeaderContainer>;
};

export default RoomHeader;

const RoomHeaderContainer = styled.div`
    background-color: #fff;
    @media screen and (min-width: 600px) {
        border-radius: 15px 15px 0px 0px;
    }
`;
