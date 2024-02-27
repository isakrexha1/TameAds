import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-logo flex">
        <div className="logo"></div>
      </Link>

      <div className="hamburger" onClick={handleHamburgerClick}>
        <div className={`line ${menuOpen ? "line-rotated" : ""}`}></div>
        <div className={`line line2 ${menuOpen ? "line2-rotated" : ""}`}></div>
        <div className={`line ${menuOpen ? "line-rotated" : ""}`}></div>
      </div>

      <div className={`nav-links flex ${menuOpen ? "nav-links-visible" : "nav-links-hidden"}`}>
        <Link to="" >Advertisers
          <div className="arr-down"></div></Link>

        <Link to="" >Media Owners
          <div className="arr-down"></div></Link>

        <Link to="" >About Us
          <div className="arr-down"></div></Link>

        <Link to=""> Resources
          <div className="arr-down"></div></Link>

        <Link to="">Ad Formats</Link>
      </div>

      <div className={`nav-auth flex ${menuOpen ? "nav-links-visible" : "nav-links-hidden"}`}>
        <Link to="" className="contact flex" > 
          <div className="headphone"></div>
          Contact</Link>

        <Link><div className="sun"></div></Link>

        <Link to="">Log in</Link>
        <Link to="" className="sign-up flex">Sign Up</Link>
      </div>

    </div>
  );
};

export default Navbar;