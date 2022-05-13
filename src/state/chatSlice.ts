import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import { ChatState } from "./state.types"
import { MessageType, Message, Chat, Client } from "../types";

const chatState: ChatState = {
  chats: []
};

const messageTypeHandler = (messages: Message[], payload: Message) => {
  const prevMessage = messages[messages.length - 1]
    if(prevMessage && prevMessage.timeString.slice(-2) === payload.timeString.slice(-2) && prevMessage.client.id === payload.client.id){
      if(prevMessage.messageType === MessageType.TAIL){
        prevMessage.messageType = MessageType.BODY;
        payload.messageType = MessageType.TAIL;
      }else{
        prevMessage.messageType = MessageType.HEAD;
        payload.messageType = MessageType.TAIL;
      }
    }
};

const chatSlice = createSlice({
  name: "chat",
  initialState: chatState,
  reducers: {
    addChat(state, action: PayloadAction<Chat>){
      state.chats.push(action.payload)
    },
    addMessage(state, action: PayloadAction<Message>) {
      const idx = state.acidx!;
      messageTypeHandler(state.chats[idx].messages, action.payload)
      state.chats[idx].messages.push(action.payload)
    },
    setActiveChat(state, action: PayloadAction<string>){
      state.acidx = state.chats.findIndex((chat)=>chat.chatId === action.payload)
    },
    setActiveClient(state, action: PayloadAction<Client>){
      const idx = state.acidx!;
      state.chats[idx].activeClient = action.payload;
    }
  }
})


export const chatReducer = chatSlice.reducer
export const {addChat, addMessage, setActiveChat, setActiveClient} = chatSlice.actions
