import React from 'react';
import Foswig from 'foswig';
import { dwarfNames } from '../dataFiles/dwarfNames'

class DwarfNameGenerator extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {
    this.handleClick();
    document.body.classList.add("dwarfGen");
  };

  componentWillUnmount() {
    document.body.classList.remove("dwarfGen");
  }

  handleClick = () => {
    let chain = new Foswig(3);
    let dwarfArray = [];
    chain.addWordsToChain(dwarfNames);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(4, 9, false);
      dwarfArray.push(`${randomWord}`)
    }
    this.setState({
      results: dwarfArray
    })
  }

  render() {
    return (
      <div>
      <div className="genWrapper">
        <h1>Dwarf Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
      </div>
    )
  }
}


export default DwarfNameGenerator;
