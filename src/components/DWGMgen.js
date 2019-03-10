import React from 'react';
import '../App.css';
import dwGMdata from '../dataFiles/dungeonWorldGMdata';
import rando from '../rando';

const data = dwGMdata;

class DWGMgen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gmMove: rando.randoArray(data.gmMoves),
      npcName: rando.randoArray(data.npcName),
      npcQuirk: rando.randoArray(data.npcQuirk),
      npcInstinct: rando.randoArray(data.npcInstinct),
      npcKnack: rando.randoArray(data.npcKnack),
      magicItemAdj: rando.randoArray(data.magicItemAdj),
      magicItemNoun: rando.randoArray(data.magicItemNoun),
      magicItemElement: rando.randoArray(data.magicItemElement),
      magicItem: `The ${rando.randoArray(data.magicItemAdj)} ${rando.randoArray(data.magicItemNoun)} of ${rando.randoArray(data.magicItemElement)}`
    }
    this.newGMMove = this.newGMMove.bind(this);
    this.newNPC = this.newNPC.bind(this);
    this.getMagicItem = this.getMagicItem.bind(this);
  }

  componentDidMount() {
    document.body.classList.add("dwToolsBG");
  }

  componentWillUnmount() {
    document.body.classList.remove("dwToolsBG");
  }

  newGMMove() {
    this.setState({
      gmMove: rando.randoArray(data.gmMoves)
    })
  }

  newNPC() {
    this.setState({
      npcName: rando.randoArray(data.npcName),
      npcQuirk: rando.randoArray(data.npcQuirk),
      npcInstinct: rando.randoArray(data.npcInstinct),
      npcKnack: rando.randoArray(data.npcKnack)
    })
  }

  getMagicItem() {
    let magicItemArray = [
      `The ${rando.randoArray(data.magicItemElement)} ${rando.randoArray(data.magicItemNoun)}`,
      `The ${rando.randoArray(data.magicItemAdj)} ${rando.randoArray(data.magicItemNoun)}`,
      `The ${rando.randoArray(data.magicItemAdj)} ${rando.randoArray(data.magicItemNoun)} of ${rando.randoArray(data.magicItemElement)}`,
      `The ${rando.randoArray(data.magicItemNoun)} of ${this.state.magicItemElement}`,
      `The ${rando.randoArray(data.magicItemNoun)} of ${rando.randoArray(data.magicItemAdj)} ${rando.randoArray(data.magicItemElement)}`,
      `The ${rando.randoArray(data.magicItemAdj)} ${rando.randoArray(data.magicItemElement)} ${rando.randoArray(data.magicItemNoun)}`
    ]
    this.setState({
      magicItem: rando.randoArray(magicItemArray)
    })
  }

  render() {
    return (
      <div className="genWrapper">
        <h1>Dungeon World GM Tools</h1>
        <div id="dwToolsContainer">
          <div className="dwGMdiv">
            <h2>GM Moves</h2>
            <button onClick={this.newGMMove}>New Move</button>
            <p>{this.state.gmMove}</p>
          </div>
          <div className="dwGMdiv">
            <h2>NPC</h2>
            <button onClick={this.newNPC}>New NPC</button>
            <div style={{textAlign: "left"}}>
              <h3 style={{fontFamily: 'Lemon, cursive', letterSpacing: 1.4}}>{this.state.npcName}</h3>
              <p><strong>Instinct: </strong>{this.state.npcInstinct}</p>
              <p><strong>Knack: </strong>{this.state.npcKnack}</p>
              <p><strong>Quirk: </strong>{this.state.npcQuirk}</p>
            </div>
          </div>
          <div className="dwGMdiv">
            <h2>Magic Item</h2>
            <button onClick={this.getMagicItem}>New Magic Item</button>
            <p>{this.state.magicItem}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DWGMgen;
