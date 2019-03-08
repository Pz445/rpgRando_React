import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h2>Name Generators</h2>
        <ul className="linkList">
          <NavLink to="/dungeon-world-gm-tools">DW GM Tools</NavLink>
        </ul>
        <h2>Generators by System</h2>
    </div>
  )
}

export default Home
