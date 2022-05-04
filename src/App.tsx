import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import UserBox from './UserBox';
import MessageList from './MessageList';
import InputBox from './InputBox';


function App() {
    return <div>
      <UserBox/>
      <MessageList/>
      <InputBox/>
    </div>
};

export default App;
