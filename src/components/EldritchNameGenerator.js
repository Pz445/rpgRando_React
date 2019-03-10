import React from 'react';
import Foswig from 'foswig';
import {eldritchNameDictionary} from '../dataFiles/eldritchNameData'

class EldritchNameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
    document.body.classList.add("eldritchGen");
  }

  componentWillUnmount() {
    document.body.classList.remove("eldritchGen");
  }

  handleClick() {
    let chain = new Foswig(3);
    let eldritchArray = [];
    chain.addWordsToChain(eldritchNameDictionary);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(6, 12, false);
      eldritchArray.push(randomWord)
    }
    this.setState({
      results: eldritchArray
    })
  }

  render() {
    return (
      <div className="genWrapper">
        <h1>Eldritch Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default EldritchNameGenerator;
