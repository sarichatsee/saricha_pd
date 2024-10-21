import React from "react";
import "./navbar.css";
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800">
      <div className="text-white">LOGO</div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
