import React from 'react';

function FreebootersCharGen(props) {
    return (
      <div className="genWrapper freebooters">
        <h1 style={{marginBottom: 0}}>Freebooters on the Frontier</h1>
        <h2 style={{marginTop: 0}}>Character Generator</h2>
        <button onClick={props.onClick}>Get New Character</button>
        <div className="dwToolsContainer" style={{marginTop: 15}}>
          <div className="freebootersDiv">
            <p><strong>Hit Die:</strong> {props.data.hitDie}</p>
            <p><strong>Hit Points:</strong> {props.data.hitPoints}</p>
            <table className="freebootersTable">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Score</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Strength</td>
                  <td>{props.data.abilityScores.strength}</td>
                  <td>{props.data.abilityMods.str}</td>
                </tr>
                <tr>
                  <td>Dexterity</td>
                  <td>{props.data.abilityScores.dexterity}</td>
                  <td>{props.data.abilityMods.dex}</td>
                </tr>
                <tr>
                  <td>Constitution</td>
                  <td>{props.data.abilityScores.constitution}</td>
                  <td>{props.data.abilityMods.con}</td>
                </tr>
                <tr>
                  <td>Intelligence</td>
                  <td>{props.data.abilityScores.intelligence}</td>
                  <td>{props.data.abilityMods.int}</td>
                </tr>
                <tr>
                  <td>Wisdom</td>
                  <td>{props.data.abilityScores.wisdom}</td>
                  <td>{props.data.abilityMods.wis}</td>
                </tr>
                <tr>
                  <td>Charisma</td>
                  <td>{props.data.abilityScores.charisma}</td>
                  <td>{props.data.abilityMods.cha}</td>
                </tr>
                <tr>
                  <td>Luck</td>
                  <td>{props.data.abilityScores.luck}</td>
                  <td>{props.data.abilityMods.lck}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={props.getSpell} style={{margin: "20px auto 0 auto"}}>Get New Spell</button>
            <p style={{margin: "10px 0 25px 0"}}>{props.data.spell}</p>
          </div>
          <div className="freebootersDiv">
            <h3 className="nameStyling">{props.data.name}</h3>
            <p>{props.data.gender} {props.data.heritage} {props.data.playbook}</p>
            {props.data.wizardName ? <p><em>Wizard Name:</em>  <strong>{props.data.wizardName}</strong></p> : null}
            <h4>Alignment</h4>
            <p>{props.data.alignment} - {props.data.alignmentText}
            </p>
            <h4>Appearance</h4>
            <ul className="unstyledUL">
              {props.data.appearance.map(item => <li>{item}</li>)}
            </ul>
            <h4>Traits</h4>
            <ul className="unstyledUL">
              {props.data.traits ? props.data.traits.map(item => <li>{item}</li>) : <li>Error:  This is a bug I am working on.  Try rerolling</li>}
            </ul>
            <h4>Gear</h4>
            <ul className="unstyledUL">
              {props.data.gear.map(item => <li>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default FreebootersCharGen;
