import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./pages/SetAvatar";
// import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import StudyAlone from "./pages/StudyAlone";

export default function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/setAvatar" element={<SetAvatar /> } />
        <Route path="/" element={<Home />} /> 
        <Route path="/studyalone" element={<StudyAlone />} /> 
      </Routes>
    </BrowserRouter>
  );
}
