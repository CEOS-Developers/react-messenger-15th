import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle"
import store from './state/store';
import Chatroom from './pages/Chatroom';
import AppInfo from './pages/AppInfo';
import ChatList from './pages/ChatList';
import FriendList from "./pages/FriendList"

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}>
              <Route path="chats" element={<ChatList/>}/>
              <Route path="chats/:chatId" element={<Chatroom/>}/>
              <Route path="friends" element={<FriendList/>}/>
              <Route path="info" element={<AppInfo/>}/>
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>NOT FOUND</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
