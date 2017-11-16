import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    let fixtures;

    if (props.data) {
      fixtures = props.data;
    } else {
      console.log(window.__data__)
      fixtures = window.__data__;
      delete window.__data__;
    }

    this.state = { fixtures }
  }
  testClick() {
    console.log('test')
  }
    render() {
        return (
          <div>
            <div>
              <h1>Test</h1>
            </div>
            <ul>
              {this.state.fixtures.map((fixture, i) => {
                return <li key={i}><a onClick={this.testClick}>{fixture.competitionDate}</a></li>
              })}              
            </ul>
          </div>
        )
    }
}

export default App;
