import React from 'react';
import Foswig from 'foswig';
import rando from '../rando'
import { riverNameDictionary, riverTitles } from '../dataFiles/riverNameData';


class RiverNameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleClick = this.handleClick.bind(this);
  }


componentDidMount() {
  this.handleClick();
  document.body.classList.add("riverGen");
};

componentWillUnmount() {
  document.body.classList.remove("riverGen");
}

handleClick() {
  let chain = new Foswig(3);
  let riverArray = [];
  chain.addWordsToChain(riverNameDictionary);
  for (let i = 1; i <=10; i++) {
    let randomWord = chain.generateWord(6, 11, false);
    riverArray.push(`The ${randomWord} ${rando.randoArray(riverTitles)}`.trim())
  }
  this.setState({
    results: riverArray
  })
}

  render() {
    return (
      <div className="genWrapper">
        <h1>River Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default RiverNameGenerator;
