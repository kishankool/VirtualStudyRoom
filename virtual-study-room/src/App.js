import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./pages/SetAvatar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import StudyAlone from "./pages/StudyAlone";
import TodoList from "./pages/TodoList";
import WhiteBoard from "./pages/WhiteBoard";

export default function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/setAvatar" element={<SetAvatar /> } />
        <Route path="/" element={<Home />} /> 
        <Route path="/studyalone" element={<StudyAlone />} />
        <Route path="/tasks" element={<TodoList />} /> 
        <Route path="/whiteboard" element={<WhiteBoard />} /> 
      </Routes>
    </BrowserRouter>
  );
}
