import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Menue from "./Menue/Menue";
import Contact from "./Contact/Contact";
import "./App.css";
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Menue></Menue>
      <Contact></Contact>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About></About>} path="/About"></Route>
        <Route element={<Menue></Menue>} path="/Menue"></Route>
        <Route element={<Contact></Contact>} path="/Contact"></Route>
      </Routes>
    </>
  );
}
