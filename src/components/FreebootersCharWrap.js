import React from 'react';
import FreebootersCharGen from './FreebootersCharGen'
import { charGen } from '../dataFiles/freebootersCharacterData'

charGen.rollCharacter(charGen.character)

class FreebootersCharacterWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          playbook: charGen.character.playbook,
          gender: charGen.character.gender,
          heritage: charGen.character.heritage,
          name: charGen.character.name,
          wizardName: charGen.character.wizardName,
          appearance: charGen.character.appearance,
          traits: charGen.character.traits,
          abilityScores: {
            strength: charGen.character.abilityScores.strength,
            dexterity: charGen.character.abilityScores.dexterity,
            constitution: charGen.character.abilityScores.constitution,
            intelligence: charGen.character.abilityScores.intelligence,
            wisdom: charGen.character.abilityScores.wisdom,
            charisma: charGen.character.abilityScores.charisma,
            luck: charGen.character.abilityScores.luck,
          },
          abilityMods: {
            str: charGen.character.abilityMods.str,
            dex: charGen.character.abilityMods.dex,
            con: charGen.character.abilityMods.con,
            int: charGen.character.abilityMods.int,
            wis: charGen.character.abilityMods.wis,
            cha: charGen.character.abilityMods.cha,
            lck: charGen.character.abilityMods.lck,
          },
          hitDie: charGen.character.hitDie,
          hitPoints: charGen.character.hitPoints,
          alignment: charGen.character.alignment,
          alignmentText: charGen.character.alignmentText,
          gear: charGen.character.gear,
          spell: charGen.character.spell,
        }
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
      this.setState({
        playbook: charGen.character.playbook,
        gender: charGen.character.gender,
        heritage: charGen.character.heritage,
        name: charGen.character.name,
        wizardName: charGen.character.wizardName,
        appearance: charGen.character.appearance,
        traits: charGen.character.traits,
        abilityScores: {
          strength: charGen.character.abilityScores.strength,
          dexterity: charGen.character.abilityScores.dexterity,
          constitution: charGen.character.abilityScores.constitution,
          intelligence: charGen.character.abilityScores.intelligence,
          wisdom: charGen.character.abilityScores.wisdom,
          charisma: charGen.character.abilityScores.charisma,
          luck: charGen.character.abilityScores.luck,
        },
        abilityMods: {
          str: charGen.character.abilityMods.str,
          dex: charGen.character.abilityMods.dex,
          con: charGen.character.abilityMods.con,
          int: charGen.character.abilityMods.int,
          wis: charGen.character.abilityMods.wis,
          cha: charGen.character.abilityMods.cha,
          lck: charGen.character.abilityMods.lck,
        },
        hitDie: charGen.character.hitDie,
        hitPoints: charGen.character.hitPoints,
        alignment: charGen.character.alignment,
        alignmentText: charGen.character.alignmentText,
        gear: charGen.character.gear,
        spell: charGen.character.spell,
      })
      console.log(this.state)
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
