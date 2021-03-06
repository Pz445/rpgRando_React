import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


class Home extends React.Component {

  componentDidMount() {
    document.body.classList.add('home')
  }

  componentWillUnmount() {
    document.body.classList.remove('home')
  }

  render() {
    return (
      <div id="homeDiv">
          <div className="columnDiv">
            <h2>Name Generators</h2>
            <h3>Location Names</h3>
            <NavLink className="navLink" to="/forest-name-generator">Forest Name Generator</NavLink><br />
            <NavLink className="navLink" to="/mountain-range-generator">Mountain Range Generator</NavLink><br />
            <NavLink className="navLink" to="/river-name-generator">River Name Generator</NavLink><br />
            <h3>Character Names</h3>
            <NavLink className="navLink" to="/fantasy-surname-generator">Fantasy Surname Generator</NavLink><br />
            <NavLink className="navLink" to="/dragon-name-generator">Dragon Name Generator</NavLink><br />
            <NavLink className="navLink" to="/dwarf-name-generator">Dwarf Name Generator</NavLink><br />
            <NavLink className="navLink" to="/eldritch-name-generator">Eldritch Name Generator</NavLink><br />
            <NavLink className="navLink" to="/elf-name-generator">Elf Name Generator</NavLink><br />
            <NavLink className="navLink" to="/orc-name-generator">Orc Name Generator</NavLink><br />



            <h2>Other Generators</h2>
            <NavLink className="navLink" to="/movie-personality-mashup">Movie Personality Mashup</NavLink>

          </div>
          <div className="columnDiv">
            <h2>Generators by System</h2>
            <h3>Dungeon World</h3>
            <NavLink className="navLink" to="/dungeon-world-gm-tools">Game Master Tools</NavLink>
            <h3>Freebooters on the Frontier</h3>
            <NavLink className="navLink" to="/freebooters-character-generator">Character Generator</NavLink>
            <h3>Ironsworn Oracles</h3>
            <NavLink className="navLink" to="/ironsworn-oracles">Ironsworn Oracles</NavLink>
          </div>
      </div>
    )

  }
}

export default Home
