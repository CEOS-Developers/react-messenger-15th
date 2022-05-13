import { Message, Client, Chat } from "../types";

export type ChatState = {
  chats: Chat[],
  acidx?: number, //active chat index
}

export type MessageState = {
  messages: Message[]
};

export type ClientState = {
  clients: Client[]
}