import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
        <img src="" alt="" className='logo'/>
        <ul>
          <li>Home</li>
          <li>Programms</li>
          <li>About Us</li>
          <li>Blog</li>
          <li><button className='btn'>CONTACT</button></li>
        </ul>
    </nav>
  );
}

export default NavBar;
