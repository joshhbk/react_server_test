import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { fixtures: props.data}
  }

    render() {
        return (
          <div>
            <div>
              <h1>Test</h1>
            </div>
            <ul>
              {this.state.fixtures.map(fixture => <li>{fixture.competitionDate}</li>)}
            </ul>
            <p>Test test test</p>
          </div>
        )
    }
}

export default App;
