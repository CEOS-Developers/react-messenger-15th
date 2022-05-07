import React from "react";
import UserBox from './Component/UserBox';
import MessageList from './Component/MessageList';
import InputBox from './Component/InputBox';
import { MessageProvider } from './Context/MessageContext';

/*
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"; 
*/


function App() {
    return <div>
      <MessageProvider>
        <UserBox/>
        <MessageList/>
        <InputBox/>
      </MessageProvider>     
    </div>
}

export default App;
