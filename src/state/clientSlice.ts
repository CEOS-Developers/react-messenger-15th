import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { ClientState } from "./state.types"
import {Client} from "../types"

const clientState: ClientState = {
  clients: [
    {  clientId: "1",
      imageUrl: require("../images/dog-face.png"),
      name: "강아지",},
    {
      clientId: "2",
      imageUrl: require("../images/cat-face.png"),
      name: "고양이"
    }
  ]
}

const clientSlice = createSlice({
  name: "client",
  initialState: clientState,
  reducers: {
    addClient(state, action: PayloadAction<Client>) {
      state.clients.push(action.payload)
      state.currentClient = action.payload;
    },
    removeClient(state, action: PayloadAction<Client>){
      state.clients = state.clients.filter((client)=>{
        if(state.currentClient && state.currentClient.clientId == action.payload.clientId)
          delete state.currentClient;
        return client.clientId !== action.payload.clientId})
    },
    setClient(state, action: PayloadAction<Client>){
      state.currentClient = action.payload;
    }
  }
})

export const clientReducer = clientSlice.reducer
export const {addClient, removeClient, setClient} = clientSlice.actions