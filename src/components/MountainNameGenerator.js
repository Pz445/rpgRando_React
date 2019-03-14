import React from 'react';
import Foswig from 'foswig';
import { mountainNameDictionary, mountainRangeTitles} from '../dataFiles/mountainNameData';
import rando from '../rando'

class MountainNameGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
    document.body.classList.add("mountainGen");
  }

  componentWillUnmount() {
    document.body.classList.remove("mountainGen");
  }

  handleClick() {
    let chain = new Foswig(3);
    let mountainArray = [];
    chain.addWordsToChain(mountainNameDictionary);
    for (let i = 1; i <=10; i++) {
      let randomWord = chain.generateWord(6, 10, false);
      mountainArray.push(`The ${randomWord} ${rando.randoArray(mountainRangeTitles)}`.trim())
    }
    this.setState({
      results: mountainArray
    })
  }

  render() {
    return (
      <div className="genWrapper">
        <h1>Mountain Range Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default MountainNameGenerator;
