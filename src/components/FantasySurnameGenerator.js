import React from 'react'
import { surname } from '../dataFiles/fantasySurnameData';
import rando from '../rando'

class FantasySurnameGenerator extends React.Component {
  state = {
    results: []
  }

  componentDidMount = () => {
    this.handleClick();
    document.body.classList.add('surnameGen');
  }

  componentWillUnmount = () => {
    document.body.classList.remove('surnameGen');
  }

  handleClick = () => {
    let nameArray = [];
    for (let i = 0; i < 10; i++) {
      let name = '';
      name = rando.randoArray(surname.prefix) + rando.randoArray(surname.suffix);
      nameArray.push(name);
    }
    this.setState({
      results: nameArray
    });
  }

  render () {
    return (
      <div className="genWrapper">
        <h1>Fantasy Surname Generator</h1>
        <button onClick={this.handleClick}>Get More Names</button>
        <ul className="nameList" style={{textAlign: "center"}}>
          {this.state.results.map(item=> <li><h3>{item}</h3></li>)}
        </ul>
      </div>
    )
  }
}

export default FantasySurnameGenerator;
