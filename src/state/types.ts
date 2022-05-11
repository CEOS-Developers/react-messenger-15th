export type Message = {
  msgId: string,
  client: Client,
  content: string,
  timeString: string,
  messageType: MessageType,
}

export type Client = {
  clientId: string,
  imageUrl: string,
  name: string,
}

export type MessageState = {
  messages: Message[]
};

export type ClientState = {
  currentClient?: Client,
  clients: Client[]
}

export enum MessageType {
  HEAD, BODY, TAIL, BASE
}
