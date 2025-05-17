import React from 'react';
import { Link } from 'react-router-dom';
import "./Nabar.css";

const Navbar = () => {
  return (
    <div>
      <section id="home">

        <nav id='navbar'>
          <div id='logo'>Devlorex
            {/* <img src='' alt='Logo not found' /> */}
          </div>

          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>

          <button className='btn'>Hire Me</button>
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
