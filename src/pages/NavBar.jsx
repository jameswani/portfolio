import React from "react";
import "../styles/Header.css";

function NavBar() {
  return (
    <nav className="Header">
      <a className="Title" href="/">Portfolio</a>
      <div className="Menu">
        <ul className="MenuItems">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
