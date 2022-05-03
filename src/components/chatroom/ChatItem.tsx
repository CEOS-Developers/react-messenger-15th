import { ChatType } from '../../Interface';

const ChatItem = ({ chat }: { chat: ChatType }) => {
    return <div>{chat.content}</div>;
};

export default ChatItem;
