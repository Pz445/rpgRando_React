import React from 'react';
import Foswig from 'foswig';
import { forestNames, forestTitles } from '../dataFiles/forestnames'
import rando from '../rando'

class ForestGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
    document.body.classList.add("forestGen");
  }

  componentWillUnmount() {
    document.body.classList.remove("forestGen");
  }

  handleClick() {
    let chain = new Foswig(3);
    let forestArray = [];
    chain.addWordsToChain(forestNames);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(6, 12, false);
      forestArray.push(`The ${randomWord} ${rando.randoArray(forestTitles)}`.trim())
    }
    this.setState({
      results: forestArray
    })
  }

  render() {
    return (
      <div className="genWrapper">
        <h1>Forest Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default ForestGenerator;
