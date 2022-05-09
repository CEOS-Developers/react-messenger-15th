import messages from "data/message.json";
import users from "data/user.json";
import { IChatListItem, IUserType } from "interface";
import { atom } from "recoil";

export const messageState = atom<{
  messageList: IChatListItem[];
}>({
  key: "messages",
  default: {
    messageList: messages,
  },
});

export const userState = atom<{ users: IUserType[]; currentUser: IUserType }>({
  key: "user",
  default: {
    users: users,
    currentUser: users[0],
  },
});

export const resizeState = atom<boolean>({
  key: "resize",
  default: false,
});
