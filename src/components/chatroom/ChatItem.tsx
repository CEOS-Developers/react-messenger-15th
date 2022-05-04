import { ChatType } from '../../Interface';
import { timeForToday } from '../../utils/timeForToday';

const ChatItem = ({ chat }: { chat: ChatType }) => {
    return (
        <>
            <div>{chat.content}</div>
            <div>{timeForToday(chat.date)}</div>
        </>
    );
};

export default ChatItem;
