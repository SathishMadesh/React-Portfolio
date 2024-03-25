import React from 'react';
import { ReactTyped } from 'react-typed';

function Header() {
  return (
    <div className="header" id="home">
      <div className="main-info">
        <h1><span style={{color:"white", fontSize:"1.5rem", fontStyle:"oblique"}}>Hi! I'm</span> Sathish</h1>
        <ReactTyped className="typed-text"
        strings={["Front End Development", "Web Development"]}
        typeSpeed = {40}
        backSpeed = {60}
        loop/>
        <a href="https://wa.me/9025255520" className="btn-main">Let's Connect</a>
      </div>
    </div>
  )
}

export default Header
