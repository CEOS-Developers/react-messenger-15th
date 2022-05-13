import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import { ClientState } from "./state.types"
import {Client} from "../types"

const clientState: ClientState = {
  clients: [
    {  id: "1",
      imageUrl: require("../images/dog-face.png"),
      name: "강아지",},
    {
      id: "2",
      imageUrl: require("../images/cat-face.png"),
      name: "고양이"
    },
    {
      id: "3",
      imageUrl: require("../images/fox-face.png"),
      name: "여우"
    },
    {
      id: "4",
      imageUrl: require("../images/monkey-face.png"),
      name: "원숭이"
    },
    {
      id: "5",
      imageUrl: require("../images/pig-face.png"),
      name: "돼지"
    },
    {
      id: "6",
      imageUrl: require("../images/robot-face.png"),
      name: "로봇"
    }
  ]
}

const clientSlice = createSlice({
  name: "client",
  initialState: clientState,
  reducers: {
    // addClient(state, action: PayloadAction<Client>) {
    //   state.clients.push(action.payload)
    //   state.currentClient = action.payload;
    // },
    // removeClient(state, action: PayloadAction<Client>){
    //   state.clients = state.clients.filter((client)=>{
    //     if(state.currentClient && state.currentClient.id == action.payload.id)
    //       delete state.currentClient;
    //     return client.id !== action.payload.id})
    // },
  }
})

export const clientReducer = clientSlice.reducer
export const {} = clientSlice.actions