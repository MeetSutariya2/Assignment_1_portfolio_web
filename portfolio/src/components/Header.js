import React from 'react';
import './portfolio.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src="./src/assets/profile.jpg" alt="Profile Picture" className="profile-pic" />
        <h1>Meet Sutariya</h1>
        <p>Full-Stack Developer | Passionate Coder | Problem Solver</p>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
