import { UserType } from '../../Interface';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { chatState } from '../../store/recoil';
import { getRoomIdByUser } from '../../api';
import ListItem from './ListItem';

const UserListItem = ({ user }: { user: UserType }) => {
    const chatData = useRecoilValue(chatState);
    const roomId = getRoomIdByUser(user.userId, chatData);
    return (
        <Link to={`/room/${roomId}`}>
            <ListItem user={user} />
        </Link>
    );
};

export default UserListItem;
