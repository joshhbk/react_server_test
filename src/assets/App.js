import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

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

  testClick() {
    console.log('test')
  }

  fetchInfo() {
    console.log('ran')
  }

  componentDidMount() {
    const intervalFetch = setInterval(this.fetchInfo, 30000);
    this.setState({intervalFetch});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalFetch);
  }

  render() {
    return (
      <div className={css(styles.grey, styles.hover)}>
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

const styles = StyleSheet.create({
  grey: {
    backgroundColor: 'grey'
  },
  hover: {
    ':hover': {
      backgroundColor: 'red'
    }
  }
});
export default App;
