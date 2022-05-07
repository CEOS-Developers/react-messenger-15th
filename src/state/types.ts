export type Message = {
  msgId: string,
  client: Client,
  content: string,
  time: string,
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
