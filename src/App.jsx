import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Navbar from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
