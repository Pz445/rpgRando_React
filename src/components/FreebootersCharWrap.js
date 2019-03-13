import React from 'react';
import FreebootersCharGen from './FreebootersCharGen'
import { charGen } from '../dataFiles/freebootersCharacterData'

charGen.rollCharacter(charGen.character)

class FreebootersCharacterWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = charGen.character
      this.handleClick = this.handleClick.bind(this)
      this.getSpell = this.getSpell.bind(this)
    }

    componentDidMount() {
      document.body.classList.add("freebootersGen");
    }

    componentWillUnmount() {
      document.body.classList.remove("freebootersGen");
    }

    handleClick() {
      charGen.rollCharacter(charGen.character)
      this.forceUpdate()
    }

    getSpell() {
      this.setState({
        spell: charGen.getSpell()
      })
    }

    render() {
    return (
      <div>
        <FreebootersCharGen
          data={this.state}
          onClick={this.handleClick}
          getSpell={this.getSpell}
        />
      </div>
    )}
}

export default FreebootersCharacterWrapper;
