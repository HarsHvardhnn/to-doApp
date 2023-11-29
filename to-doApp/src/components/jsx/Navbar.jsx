// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className ='a' to="/" >
           TaskList
          </NavLink>
        </li>
        <li>
          <NavLink className='a' to="/newtask" >
            New Task
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
