import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand  px-5 fs-4" to="/">
            {" "}
            {""}
            Gourmet au Catering
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="justify-content-end px-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/About">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menue">
                  {" "}
                  {""}
                  Menue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  {" "}
                  {""}
                  Contact
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
