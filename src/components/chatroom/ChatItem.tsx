import { ChatType } from '../../Interface';

interface ChatItemProps {
    chat: ChatType;
}

const ChatItem = ({ chat }: ChatItemProps) => {
    return <div>{chat.content}</div>;
};

export default ChatItem;
