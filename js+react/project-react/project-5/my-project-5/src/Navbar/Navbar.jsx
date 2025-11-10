import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand px-5 fs-4" to="/">
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
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/menu"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("menu");
                  }}
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
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
