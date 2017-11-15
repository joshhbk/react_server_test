import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    let fixtures;

    if (props.data) {
      fixtures = props.data;
    } else {
      fixtures = window.__data__;
      delete window.__data__;
    }

    this.state = { fixtures }
  }

    render() {
        return (
          <div>
            <div>
              <h1>Test</h1>
            </div>
            <ul>
              {this.state.fixtures.map !== undefined && this.state.fixtures.map(fixture => <li>{fixture.competitionDate}</li>)}              
            </ul>
          </div>
        )
    }
}

export default App;
