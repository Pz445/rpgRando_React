import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import DWGMgen from './components/DWGMgen'


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
              <Route path="/dungeon-world-gm-tools" component={DWGMgen} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
