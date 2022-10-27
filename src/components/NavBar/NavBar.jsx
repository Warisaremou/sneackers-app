import React from "react";
import Cart from "../Cart/Cart";
import logo from "../../pictures/logo.svg";
import userProfil from "../../pictures/image-avatar.png";

function NavBar() {
  return (
    <nav className="navbar ">
      <ul className="navbar-nav">
        <div className="logo">
          <img src={logo} alt="Sneackers-logo" />
        </div>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Collections
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Men
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Women
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="aside-nav">
        <Cart />
        <img src={userProfil} alt="user-profil" className="user" />
      </div>
    </nav>
  );
}

export default NavBar;
