import React from 'react';
import { ironswornData } from '../dataFiles/ironswornData'
import rando from '../rando'
import IronswornDisplay from './IronswornDisplay'

class IronswornGenerator extends React.Component {
  state = {
    displayText: '',
    heading: '',
    charName: '',
    charDescriptor: '',
    charRole: '',
    charGoal: '',
    charToggle: false,
  }

  actionClick = () => {
    let word1 = rando.randoArray(ironswornData.action);
    let word2 = rando.randoArray(ironswornData.theme);
    this.setState({
      heading: `Action & Theme`,
      displayText: `${word1} ${word2}`,
      charToggle: false,
    })
  }

  locationClick = () => {
    let word1 = rando.randoArray(ironswornData.locationDescriptor);
    let word2 = rando.randoArray(ironswornData.location);
    this.setState({
      heading: `Location`,
      displayText: `${word1} ${word2}`,
      charToggle: false,
    })
  }

  coastalLocationClick = () => {
    let word1 = rando.randoArray(ironswornData.locationDescriptor);
    let word2 = rando.randoArray(ironswornData.coastalLocations);
    this.setState({
      heading: `Coastal Location`,
      displayText: `${word1} ${word2}`,
      charToggle: false,
    })
  }

  settlementName = () => {
    let prefix = rando.randoArray(ironswornData.settlementPrefix);
    let suffix = rando.randoArray(ironswornData.settlementSuffix);
    this.setState({
      heading: `Settlement Name`,
      displayText: `${prefix}${suffix}`,
      charToggle: false,
    })
  }

  settlementTrouble = () => {
    this.setState({
      heading: `Settlement Trouble`,
      displayText: rando.randoArray(ironswornData.settlementTrouble),
      charToggle: false,
    })
  }

  combatAction = () => {
    this.setState({
      heading: `Combat Action`,
      displayText: ironswornData.combatAction(),
      charToggle: false,
    })
  }

  mysticBacklash = () => {
    this.setState({
      heading: `Mystic Backlash`,
      displayText: ironswornData.mysticBacklash(),
      charToggle: false,
    })
  }

  plotTwist = () => {
    this.setState({
      heading: `Major Plot Twist`,
      displayText: ironswornData.majorPlotTwist(),
      charToggle: false,
    })
  }

  character = () => {
    this.setState({
      heading: `Character Generator`,
      displayText: '',
      charName: rando.randoArray(ironswornData.characterNames),
      charDescriptor: rando.randoArray(ironswornData.characterDescriptor),
      charRole: rando.randoArray(ironswornData.characterRole),
      charGoal: rando.randoArray(ironswornData.characterGoal),
      charToggle: true,
    })
  }

  componentDidMount() {
    document.body.classList.add('ironswornGen')
  }

  componentWillUnmount() {
    document.body.classList.remove('ironswornGen')
  }

  render () {
    return (
      <div className="genWrapper">
        <h1>Ironsworn Oracles</h1>
        <button onClick={this.actionClick} className="ironswornButton">Get Action & Theme</button>
        <button onClick={this.locationClick} className="ironswornButton">Get Location</button>
        <button onClick={this.coastalLocationClick} className="ironswornButton">Get Coastal Location</button>
        <button onClick={this.settlementName} className="ironswornButton">Get Settlement Name</button>
        <button onClick={this.settlementTrouble} className="ironswornButton">Get Settlement Trouble</button>
        <button onClick={this.character} className="ironswornButton">Get Character</button>
        <button onClick={this.combatAction} className="ironswornButton">Get Combat Action</button>
        <button onClick={this.mysticBacklash} className="ironswornButton">Get Mystic Backlash</button>
        <button onClick={this.plotTwist} className="ironswornButton">Get Major Plot Twist</button>
        <div>
          <IronswornDisplay
            text={this.state.displayText}
            heading={this.state.heading}
            toggle={this.state.charToggle}
            name={this.state.charName}
            descriptor={`${this.state.charDescriptor} ${this.state.charRole}`}
            goal={this.state.charGoal}
          />
        </div>
      </div>
    )
  }
}

export default IronswornGenerator;
