import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div id="homeDiv">
        <div className="columnDiv">
          <h2>Name Generators</h2>
          <h3>Location Names</h3>
          <NavLink className="navLink" to="/forest-name-generator">Forest Name Generator</NavLink><br />
          <NavLink className="navLink" to="/mountain-name-generator">Mountain Name Generator</NavLink><br />
          <NavLink className="navLink" to="/river-name-generator">River Name Generator</NavLink><br />
          <h3>Character Names</h3>
          <NavLink className="navLink" to="/orc-name-generator">Orc Name Generator</NavLink><br />
          <NavLink className="navLink" to="/eldritch-name-generator">Eldritch Name Generator</NavLink><br />
          <h2>Other Generators</h2>
          <NavLink className="navLink" to="/movie-personality-mashup">Movie Personality Mashup</NavLink>

        </div>
        <div className="columnDiv">
          <h2>Generators by System</h2>
          <h3>Dungeon World</h3>
          <NavLink className="navLink" to="/dungeon-world-gm-tools">Game Master Tools</NavLink>
          <h3>Freebooters on the Frontier</h3>
          <NavLink className="navLink" to="/freebooters-character-generator">Character Generator</NavLink>
        </div>
    </div>
  )
}

export default Home
