import React from 'react';

function MovieMashup(props) {
  return (
    <div style={{maxWidth: "45%"}}>
        <h2>{props.charName}</h2>
        <h3>{props.movieName}</h3>
        <img src={props.src} alt={"Image of " + props.charName + " from " + props.movieName} style={{maxWidth: "90%", maxHeight: "375px"}} />
    </div>
  )
}

export default MovieMashup;
