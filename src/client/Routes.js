import React from 'react';
import {Route} from 'react-router-dom';
import App from '../assets/App';

export default () => {
  return (
    <div>
      <Route exact path="/" component={App} />
    </div>
  )
}
