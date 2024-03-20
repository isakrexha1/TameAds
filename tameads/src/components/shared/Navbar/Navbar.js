import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Advertisers from "./MegaMenu/Advertisers/Advertisers";
import About from "./MegaMenu/About/About";
import Resources from "./MegaMenu/Resuorces/Resources";
import Media from "./MegaMenu/Media/Media";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-logo flex">
        <div className="logo"></div>
      </Link>

      <div className="nav-links flex">
        <div className="mega-menu-item">
          <Link to="">
            Advertisers
            <div className="arr-down"></div>
          </Link>
          <div className="mega-menu">
            <Advertisers />
          </div>
        </div>
        <div className="mega-menu-item">
          <Link to="">
            Media Owners
            <div className="arr-down"></div>
          </Link>
          <div className="mega-menu">
            <Media />
          </div>
        </div>
        <div className="mega-menu-item">
          <Link to="">
            About Us
            <div className="arr-down"></div>
          </Link>
          <div className="mega-menu">
            <About />
          </div>
        </div>
        <div className="mega-menu-item">
          <Link to="">
            Resources
            <div className="arr-down"></div>
          </Link>
          <div className="mega-menu">
            <Resources />
          </div>
        </div>
        <Link to="">Ad Formats</Link>
      </div>

      <div className="nav-auth flex">
        <Link to="" className="contact flex">
          <div className="headphone"></div>
          Contact
        </Link>

        <Link>
          <div className="sun"></div>
        </Link>

        <Link to="">Log in</Link>
        <Link to="" className="sign-up flex">
          Sign Up
        </Link>
      </div>
      
      <div className="hamburger">
        <div className="line"></div>
        <div className="line line2"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Navbar;
