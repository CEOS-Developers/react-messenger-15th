import {atom} from "recoil";
import { MessageItem, MessageList } from "./type";
import chatting from "./data/chat.json";

export const messageListState = atom({

    key: "messageList",
    default: chatting[0],

});

export const messageState = atom({
    key:"message",
    default:"",
});
