import React from 'react';
import { ReactTyped } from 'react-typed';

function Header() {
  return (
    <div className="header" id="home">
      <div className="main-info">
        <h1>Web Developer</h1>
        <ReactTyped className="typed-text"
        strings={["Front End Development", "Web Development"]}
        typeSpeed = {40}
        backSpeed = {60}
        loop/>
        <a href="#" className="btn-main">Download CV</a>
      </div>
    </div>
  )
}

export default Header
