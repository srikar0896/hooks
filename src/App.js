import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  PlaygroundSection,
  PlayGround
}
  from './components';
import hooks from './playground';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          hooks.map(hook => (
            <PlaygroundSection key={hook.name}>
              <h2>
                {hook.name}
              </h2>
              <PlayGround>
                <hook.example />
              </PlayGround>
            </PlaygroundSection>
          ))
        }
      </div>
    );
  }
}

export default hot(App);
