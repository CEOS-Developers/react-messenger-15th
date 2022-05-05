export type Message = {
  msgId: string,
  ownerId: number,
  content: string,
  time: string,
}

export type MessageState = {
  messages: Message[]
};