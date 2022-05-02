export interface IInputEmoticon {
  addEmoticonMessage: (emo: string) => void;
}

export interface IMessageBallon {
  message: { id: number; text: string; user: string; date: string };
}
