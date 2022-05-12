import {atom} from "recoil";
import { MessageItem, MessageList } from "./type";
import chatting from "./data/chat.json";

export const userState = atom({

    key: "user",
    default:0,

});

export const messageListState = atom({

    key: "messageList",
    default: chatting[0],

});
