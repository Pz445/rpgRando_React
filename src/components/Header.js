import React from 'react';
import logo from '../img/logo.png';
import '../App.css'

export const Header = (props) => {
  return (
    <div className="headerDiv">
      <img src={logo} alt="rpgRando Logo" />
    </div>
  )
}
