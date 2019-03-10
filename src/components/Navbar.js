import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    }
  }

  render() {
    return (
      <nav>
        <div id="navDiv">
          <NavLink to="/"><img src={logo} alt="rpgRando Logo"/></NavLink>
          <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    )
  }


}

export default Navbar;
