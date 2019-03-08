import React from 'react';
import '../App.css';
import dwGMdata from '../dataFiles/dungeonWorldGMdata';
import rando from '../rando';

class DWGMgen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(dwGMdata);
    return (
      <div>
        <h1>Dungeon World GM Tools</h1>
      </div>
    )
  }
}

export default DWGMgen;
