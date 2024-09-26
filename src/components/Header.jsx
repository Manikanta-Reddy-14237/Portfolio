import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <a href="#home-content" style={{ "--i": 1 }} className="active">Home</a>
        <a href="#about" style={{ "--i": 2 }}>About</a>
        <a href="#Skills" style={{ "--i": 3 }}>Skills</a>
        <a href="#project" style={{ "--i": 4 }}>Portfolio</a>
        <a href="#contact" style={{ "--i": 5 }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
