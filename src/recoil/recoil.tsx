import messages from "data/message.json";
import users from "data/user.json";
import { IChatListItem, IChatRoomState, IUserState } from "interface";
import { atom } from "recoil";

export const messageState = atom<IChatListItem[]>({
  key: "messages",
  default: messages,
});

export const userState = atom<IUserState>({
  key: "user",
  default: {
    users: users,
    mainUser: users[0],
  },
});

export const chatRoomState = atom<IChatRoomState>({
  key: "chatRoom",
  default: {
    message: [],
    currentUser: { id: 0, name: "", statusMessage: "" },
  },
});

export const resizeState = atom<boolean>({
  key: "resize",
  default: false,
});
