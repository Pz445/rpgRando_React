import React from 'react';
import Foswig from 'foswig';
import { dragonNames } from '../dataFiles/dragonNames'

class DragonNameGenerator extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {
    this.handleClick();
    document.body.classList.add("elfGen");
  };

  componentWillUnmount() {
    document.body.classList.remove("elfGen");
  }

  handleClick = () => {
    let chain = new Foswig(3);
    let dragonArray = [];
    chain.addWordsToChain(dragonNames);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(6, 11, false);
      dragonArray.push(`${randomWord}`)
    }
    this.setState({
      results: dragonArray
    })
  }

  render() {
    return (
      <div>
      <div className="genWrapper">
        <h1>Dragon Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
      </div>
    )
  }
}


export default DragonNameGenerator;
