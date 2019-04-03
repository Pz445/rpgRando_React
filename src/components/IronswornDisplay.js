import React from 'react'

const IronswornDisplay = (props) => {
  return (
    <div style={{fontSize: 20}}>
      <h2 style={{marginTop: 30}}>{props.heading}</h2>
      <p>{props.text}</p>
      {props.toggle ? <div style= {{maxWidth: 400, margin: "0 auto", textAlign: "left"}}>
        <p><strong style={{marginRight: 10}}>Name:</strong>{props.name}</p>
        <p><strong style={{marginRight: 10}}>Descriptor:</strong>{props.descriptor}</p>
        <p><strong style={{marginRight: 10}}>Goal:</strong>{props.goal}</p>
      </div> : null}
    </div>
  )
}

export default IronswornDisplay
