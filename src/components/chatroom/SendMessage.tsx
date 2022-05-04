import useInput from '../../hooks/useInput';
import { ChatDataType, ChatType } from '../../Interface';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import * as api from '../../api/index';
import { FormEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { chatState } from '../../store/recoil/recoil';

const SendMessage = ({ roomId, chatData }: { roomId: number; chatData: ChatDataType[] }) => {
    const setChatData = useSetRecoilState(chatState);
    const { value, onChange, resetValue } = useInput('');
    const { postMessage } = api;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const MessageObj: ChatType = {
            userId: 1,
            content: value,
            date: dayjs().format(),
            like: false,
            chatId: uuidv4(),
        };
        postMessage(roomId, MessageObj, chatData, setChatData);
        resetValue();
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={onChange} />
                <button type="submit"> send </button>
            </form>
        </>
    );
};

export default SendMessage;
