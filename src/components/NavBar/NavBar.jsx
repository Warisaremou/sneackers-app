import React from "react";
import Cart from "../Cart/Cart";
import logo from "../../pictures/logo.svg";
import userProfil from "../../pictures/image-avatar.png";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function NavBar({ openMenu, setIsOpen }) {

  return (
    <nav className="navbar">
      <HiOutlineMenu className="text-gray-500 text-2xl md:hidden mt-1 cursor-pointer" onClick={() => setIsOpen(true)} />
      <div className="logo">
        <img src={logo} alt="Sneackers-logo" />
      </div>
      <ul className={`flex flex-col md:flex-row fixed z-50 md:relative bg-white md:bg-transparent top-0 bottom-0 h-full md:h-auto w-60 md:w-auto py-12 pl-6 duration-500 ${openMenu ? 'left-0' : '-left-full md:left-0'}`}>
        <IoMdClose className="text-3xl text-gray-500 md:hidden cursor-pointer" onClick={() => setIsOpen(false)} />
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
