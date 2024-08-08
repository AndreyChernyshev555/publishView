import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from "./Login/Login.jsx";
import HomePage01 from "./HomePage01.jsx";
import HomePage02 from "./HomePage02.jsx";

export default function App() {
  const cartItems = useSelector(state => state);

  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/home1" element={<HomePage01 cartItems={cartItems}/>}/>
        <Route path="/home2" element={<HomePage02 cartItems={cartItems}/>}/>
      </Routes>
    </HashRouter>
  );
}
