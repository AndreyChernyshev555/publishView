import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Login from "./Login/Login.jsx";
import HomePage01 from "./HomePage01.jsx";
import HomePage02 from "./HomePage02.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/home1" element={<HomePage01/>}/>
        <Route path="/home2" element={<HomePage02/>}/>
      </Routes>
    </HashRouter>
  );
}
