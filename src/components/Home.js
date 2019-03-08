import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { Header } from './Header'


function Home() {
  return (
    <div>
        <Header />
        <h2>Name Generators</h2>
        <h2>Generators by System</h2>
        <ul className="linkList">
          <NavLink to="/dungeon-world-gm-tools">DW GM Tools</NavLink>
        </ul>
    </div>
  )
}

export default Home
