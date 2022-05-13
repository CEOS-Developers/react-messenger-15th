export type Message = {
  msgId: string,
  client: Client,
  content: string,
  timeString: string,
  messageType: MessageType,
}

export type Client = {
  id: string,
  imageUrl: string,
  name: string,
}

export type Chat = {
  chatId: string,
  activeClient: Client,
  clients: Client[], 
  messages: Message[],
}

export enum MessageType {
  HEAD, BODY, TAIL, BASE
}
