import { RoomType } from '../../Interface';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/recoil';
import { getUserInfoById } from '../../api';
import styled from 'styled-components';
import ListItem from './ListItem';

const RoomListItem = ({ room }: { room: RoomType }) => {
    const userData = useRecoilValue(userState);
    const userId = room.user[1]['userId'];
    const user = getUserInfoById(userId, userData);
    const lastChat = room.chat[room.chat.length - 1];
    return (
        <Link to={`/room/${room.roomId}`}>
            <ListItem user={user} lastChat={lastChat} />
        </Link>
    );
};

export default RoomListItem;
