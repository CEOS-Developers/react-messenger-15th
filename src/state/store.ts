import { configureStore } from "@reduxjs/toolkit";

import { chatReducer } from "./chatSlice";
import { clientReducer } from "./clientSlice";

const store = configureStore({
  reducer: {
    // message: messageReducer,
    client: clientReducer,
    chat: chatReducer,
  }}
)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;