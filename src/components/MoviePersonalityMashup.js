import React from 'react';
import { charList } from '../dataFiles/movieCharacterData';
import MovieMashup from './MovieMashup';
import rando from '../rando'

class MoviePersonalityMashup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      movie1: '',
      image1: '',
      name2: '',
      movie2: '',
      image2: '',
    }
    this.fillState = this.fillState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fillState() {
    let obj1 = rando.randoArray(charList);
    let obj2 = rando.randoArray(charList);
    if (obj1.name === obj2.name) {
      obj2 = rando.randoArray(charList);
    }
    this.setState({
      name1: obj1.name,
      movie1: obj1.movie,
      image1: obj1.image,
      name2: obj2.name,
      movie2: obj2.movie,
      image2: obj2.image,
    })
    if (this.state.name1 === this.state.name2 || this.state.movie1 === this.state.movie2) {

    }
  }

  componentDidMount() {
    this.fillState();
    document.body.classList.add("movieMashupGen");
  }

  componentWillUnmount() {
    document.body.classList.remove("movieMashupGen");
  }

  handleClick() {
    this.fillState();
  }

  render() {
    return (
      <div className="genWrapper">
        <h2>Movie Personality Mashup</h2>
        <p className="bold">How do you use it?</p>
        <p>The generator will produce two characters from popular movies. Mashup the strengths, weaknesses, looks, virtues, voices, or mannerisms of these characters to generate a personality for your PC/NPC.</p>
        <button onClick={this.handleClick}>Again</button>
        <div className="dwToolsContainer" id="movieMash">
          <MovieMashup movieName={this.state.movie1} src={this.state.image1} charName={this.state.name1} />
          <MovieMashup movieName={this.state.movie2} src={this.state.image2} charName={this.state.name2}/>
        </div>
      </div>
    )
  }
}

export default MoviePersonalityMashup;
