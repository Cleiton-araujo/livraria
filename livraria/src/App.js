import React, { Component } from 'react';

import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Menu from './templete/menu'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
