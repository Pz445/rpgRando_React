import React from 'react';
import Foswig from 'foswig';
import { elfNames } from '../dataFiles/elfNames'

class ElfNameGenerator extends React.Component {
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
    let elfArray = [];
    chain.addWordsToChain(elfNames);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(6, 13, false);
      elfArray.push(`${randomWord}`)
    }
    this.setState({
      results: elfArray
    })
  }

  render() {
    return (
      <div>
      <div className="genWrapper">
        <h1>Elf Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
      </div>
    )
  }
}


export default ElfNameGenerator;
