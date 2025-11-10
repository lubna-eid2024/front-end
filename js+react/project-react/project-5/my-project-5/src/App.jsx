import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Contact from "./Contact/Contact";
import "./App.css";
import SendMassege from "./sendmsessage/SendMassege";

function App() {
  return (
    <>
      <Navbar />
      <Home></Home>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SendMassege" element={<SendMassege />} />
      </Routes>
    </>
  );
}

export default App;
