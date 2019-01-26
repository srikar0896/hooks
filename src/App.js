import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root';

import UseStatePlayground from './playground/useState';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UseStatePlayground />
      </div>
    );
  }
}

export default hot(App);
