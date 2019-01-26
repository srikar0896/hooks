import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import UseStatePlayground from './playground/useState';
import UseEffectPlayground from './playground/useEffect';
import { PlaygroundSection, PlayGround } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlaygroundSection>
          <h2>
            UseState
          </h2>
          <PlayGround>
            <UseStatePlayground />
          </PlayGround>
        </PlaygroundSection>
  
        <PlaygroundSection>
          <h2>
            UseEffect
          </h2>
          <PlayGround>
            <UseEffectPlayground />
          </PlayGround>
        </PlaygroundSection>
      </div>
    );
  }
}

export default hot(App);
