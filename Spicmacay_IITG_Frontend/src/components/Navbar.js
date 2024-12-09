import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/main-logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img className="navbar-logo" src={logo} />

        <div className={`nav-links ${isMobileMenuOpen ? "mobile" : ""}`}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/events">
            Events
          </Link>

          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>

          <Link className="nav-link" to="/activities">
            Activities
          </Link>

          <Link className="nav-link" to="/team">
            Team
          </Link>

          {/* <Link className="nav-link" to="/about">
            About Us
          </Link> */}

          {/* <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/feedback">
            feedback
          </Link> */}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
