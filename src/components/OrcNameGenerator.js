import React from 'react';
import Foswig from 'foswig';
import { orcNames } from '../dataFiles/orcNames';


class OrcNameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.handleClick = this.handleClick.bind(this);
  }


componentDidMount() {
  this.handleClick();
  document.body.classList.add("orcGen");
};

componentWillUnmount() {
  document.body.classList.remove("orcGen");
}

handleClick() {
  let chain = new Foswig(3);
  let orcArray = [];
  chain.addWordsToChain(orcNames);
  for (let i = 1; i <=10; i++) {
    let randomWord = chain.generateWord(4, 8, false);
    orcArray.push(`${randomWord}`)
  }
  this.setState({
    results: orcArray
  })
}

  render() {
    return (
      <div className="genWrapper">
        <h1>Orc Name Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default OrcNameGenerator;
