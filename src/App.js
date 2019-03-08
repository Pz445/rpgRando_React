import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import DWGMgen from './components/DWGMgen'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/dungeon-world-gm-generator" component={DWGMgen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
