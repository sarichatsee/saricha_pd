import React, { useState, useEffect } from "react";
import "./hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      id="menu-btn" 
      className={isOpen ? 'open' : 'close'} 
      onClick={handleClick}
    >
      <span></span>
      <span className="text">MENU</span>
    </div>
  );
};

export default Hamburger;