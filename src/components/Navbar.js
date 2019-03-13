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
        <div className="navDiv">
          <div>
            <NavLink to="/"><img src={logo} alt="rpgRando Logo"/></NavLink>
          </div>
          <div>
            <NavLink className="navLink" to="/contact" id="contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    )
  }


}

export default Navbar;
