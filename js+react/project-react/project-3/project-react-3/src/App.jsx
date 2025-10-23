import React from "react";

import "./App.css";
import Registration from "./Component/Registration/Registration";

import { Route, Router, Routes } from "react-router-dom";
import Home from "./HomeComponent/Home";
import Login from "./componentLogin/Login";
import Navbar from "./NavbarComponent/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Registration />} path="/"></Route>
        <Route element={<Registration />} path="/Registration"></Route>
        <Route element={<Login />} path="/Login"></Route>
        <Route element={<Home />} path="/Home"></Route>
      </Routes>
    </>
  );
}

export default App;






