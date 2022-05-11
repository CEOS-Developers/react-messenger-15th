import { Message, Client } from "../types";

export type MessageState = {
  messages: Message[]
};

export type ClientState = {
  currentClient?: Client,
  clients: Client[]
}