import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div id="homeDiv">
        <h2>Name Generators</h2>
        <h2>Generators by System</h2>
        <h3>Dungeon World</h3>
        <NavLink to="/dungeon-world-gm-tools">Game Master Tools</NavLink>
    </div>
  )
}

export default Home
