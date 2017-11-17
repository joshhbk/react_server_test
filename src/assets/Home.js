import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Am the home page</h1>
        <Link to='/fixtures-page'>Fixtures!</Link>
      </div>
    )
  }
}

export default Home;
