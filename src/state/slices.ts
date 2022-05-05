import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { MessageState, Message } from "./types"


const messageState: MessageState = {
  messages: []
};

const messageSlice = createSlice({
  name: "message",
  initialState: messageState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload)
    },
  }
})

export const messageReducer = messageSlice.reducer
export const {addMessage} = messageSlice.actions
