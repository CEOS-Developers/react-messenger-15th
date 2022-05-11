import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { MessageState, Message } from "./types"
import { MessageType } from "./types";

const messageState: MessageState = {
  messages: []
};

const messageTypeHandler = (state: MessageState, payload: Message) => {
  const prevMessage = state.messages[state.messages.length - 1]
    if(prevMessage && prevMessage.timeString.slice(-2) === payload.timeString.slice(-2) && prevMessage.client.clientId === payload.client.clientId){
      if(prevMessage.messageType === MessageType.TAIL){
        prevMessage.messageType = MessageType.BODY;
        payload.messageType = MessageType.TAIL;
      }else{
        prevMessage.messageType = MessageType.HEAD;
        payload.messageType = MessageType.TAIL;
      }
    }
};

const messageSlice = createSlice({
  name: "message",
  initialState: messageState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      messageTypeHandler(state, action.payload);
      state.messages.push(action.payload)
    },
  }
})


export const messageReducer = messageSlice.reducer
export const {addMessage} = messageSlice.actions
