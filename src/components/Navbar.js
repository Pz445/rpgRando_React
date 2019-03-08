import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <img src={logo} />
    </nav>
  )
}

export default Navbar;
