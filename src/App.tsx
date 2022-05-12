import React from "react";
import { Route, Routes } from 'react-router-dom';
import Chatlist from '../src/Pages/Chatlist';
import Userlist from '../src/Pages/Userlist';
import Room0 from '../src/Pages/Room0';
import Setting from '../src/Pages/Setting';

function App() {
    return (
    <Routes>
      <Route path="/" element={<Chatlist/>} />
      <Route path="/Userlist" element={<Userlist/>} />
      <Route path="/Room0" element={<Room0/>} />
      <Route path="/Setting" element={<Setting/>} />
    </Routes>
    )
};

export default App;
