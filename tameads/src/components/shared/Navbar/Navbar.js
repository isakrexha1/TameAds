import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const nav = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-logo flex">
        <div className="logo"></div>
      </Link>

      <div className="nav-links flex">
        
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

      <div className="nav-auth flex">
       <Link to="" >  <div className="headphone"></div>
       Contact</Link>
        

        <div className="sun"></div>

        <Link to="">Sign Up</Link>
      </div>

      <div className="hamburger">
        <div className="line"></div>
        <div className="line line2"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default nav;
