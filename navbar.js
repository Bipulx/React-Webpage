import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a className="menu_active">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a className="menu_active">
                <Link to="About">About</Link>
              </a>
            </li>
            <li>
              <a className="menu_active">
                <Link to="Contact">Contact</Link>
              </a>
            </li>
            <li>
              <a className="menu_active">
                <Link to="Service">Service</Link>
              </a>
            </li>
          </ul>
          <h1 className="logo">Bipul</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
