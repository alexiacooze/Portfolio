import React from "react";
import "./Header.scss";
// import logo from "../../assets/Images/website-logo.png"
import { Link } from "react-router-dom";

// add in github, linkedin, email within the desktop and tablet view
function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
      {/* <div className="header__logo-container">
         <img className="header__logo" src={logo} alt="Website Logo"/>
      </div> */}
        <ul className="header__select">
          <Link className="header__link" to={"/"} style={{textDecoration:"none"}}>

          <li className="header__home">Home</li>
          </Link>
          <Link className="header__link" to={"/projects"} style={{textDecoration:"none"}}>

          <li className="header__about">Projects</li>
          </Link>
          <Link className="header__link" to={"/about"} style={{textDecoration:"none"}}>

          <li className="header__about">About</li>
          </Link>
          <Link className="header__link" to={"/contact"} style={{textDecoration:"none"}}>
            
          <li className="header__contact">Contact</li>
          </Link>
          {/* <li className="header__resume">Resume</li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
