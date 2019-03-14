import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import DWGMgen from './components/DWGMgen'
import ForestGenerator from './components/ForestNameGenerator'
import EldritchNameGenerator from './components/EldritchNameGenerator'
import MountainNameGenerator from './components/MountainNameGenerator'
import FreebootersCharacterWrapper from './components/FreebootersCharWrap'
import Contact from './components/Contact'
import MoviePersonalityMashup from './components/MoviePersonalityMashup'
import RiverNameGenerator from './components/RiverNameGenerator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbarLogo: true
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <div className="content">
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact} />
              <Route path="/dungeon-world-gm-tools" component={DWGMgen} />
              <Route path="/forest-name-generator" component={ForestGenerator} />
              <Route path="/eldritch-name-generator" component={EldritchNameGenerator} />
              <Route path="/mountain-name-generator" component={MountainNameGenerator} />
              <Route path="/freebooters-character-generator" component={FreebootersCharacterWrapper} />
              <Route path="/movie-personality-mashup" component={MoviePersonalityMashup} />
              <Route path="/river-name-generator" component={RiverNameGenerator} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
